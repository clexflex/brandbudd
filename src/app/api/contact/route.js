import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import checkLimit from '@/utils/rateLimiter';

// Rate limiting configuration
const MAX_REQUESTS_PER_MINUTE = 5;

async function verifyRecaptcha(token) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const data = await response.json();
    return data.success && data.score > 0.5; // Score threshold can be adjusted
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    // try {
    //   await checkLimit.check(request, MAX_REQUESTS_PER_MINUTE, ip);
    // } catch (error) {
    //   return NextResponse.json(
    //     { error: 'Too many requests. Please try again later.' },
    //     { status: 429 }
    //   );
    // }

    const body = await request.json();
    const { name, email, phone, company, service, budget, message, recaptchaToken } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification is required' },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL_TO, // Where you want to receive emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p><small>IP Address: ${ip}</small></p>
        <p><small>This email was sent from the contact form on brandbudd.com</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Service Interested In: ${service || 'Not specified'}
        Budget Range: ${budget || 'Not specified'}
        
        Message:
        ${message}
        
        ---
        IP Address: ${ip}
        This email was sent from the contact form on brandbudd.com
      `,
    };

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting BrandBudd',
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your submission:</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Best regards,<br>The BrandBudd Team</p>
      `,
      text: `
        Thank you for reaching out, ${name}!
        
        We have received your message and will get back to you as soon as possible.
        
        Here's a copy of your submission:
        
        Message:
        ${message}
        
        Best regards,
        The BrandBudd Team
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}