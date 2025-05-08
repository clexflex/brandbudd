import HomePage from '@/components/HomePage';

export const metadata = {
  title: 'BrandBudd | Digital Marketing & Software Development Agency',
  description: 'BrandBudd provides cutting-edge digital marketing strategies and custom software solutions for businesses worldwide, with expertise in India, Pune, Mumbai, and Kolhapur. Services in English, Hindi, and Marathi.',
  keywords: 'digital marketing agency, web development company, SEO services, software development, global digital agency, Pune digital services, Mumbai software development, Kolhapur web design, Marathi-speaking consultants, MERN stack development, React developers, digital transformation, custom software solutions, TeamSync, ExcelFlow360',
  alternates: {
    canonical: 'https://brandbudd.com',
  },
  openGraph: {
    title: 'BrandBudd | Digital Marketing & Software Development Agency',
    description: 'BrandBudd provides cutting-edge digital marketing strategies and custom software solutions for businesses worldwide, with expertise in India, Pune, Mumbai, and Kolhapur. Services in English, Hindi, and Marathi.',
    url: 'https://brandbudd.com',
    siteName: 'BrandBudd',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://brandbudd.com/images/hero/brandbudd-social-logo.png',
        width: 1200,
        height: 630,
        alt: 'BrandBudd - Digital Marketing & Software Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandBudd | Digital Marketing & Software Development Agency',
    description: 'BrandBudd provides cutting-edge digital marketing strategies and custom software solutions for businesses worldwide, with expertise in India, Pune, Mumbai, and Kolhapur.',
    images: ['https://brandbudd.com/images/hero/brandbudd-social-logo.png'],
  },
};

export default function Home() {
  return <HomePage />;
}