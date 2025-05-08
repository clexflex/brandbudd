'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({ children }) {
  // Company info for structured data
  const companyInfo = {
    name: "BrandBudd",
    url: "https://brandbudd.com",
    logo: "https://brandbudd.com/logo.png",
    sameAs: [
      "https://www.facebook.com/brandbudd/",
      "https://www.instagram.com/brand_budd",
      "https://www.linkedin.com/company/brandbudd/"
    ],
    address: {
      streetAddress: "Maharashtra",
      addressRegion: "Maharashtra",
      postalCode: "416003",
      addressCountry: "IN"
    },
    contactPoint: {
      telephone: "+91-8010881394",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Marathi"]
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    ...companyInfo,
    description: "BrandBudd is a full-service digital marketing and software development agency specializing in web development, SEO, content creation, and custom software solutions globally and across India including Pune, Mumbai, and Kolhapur.",
    image: "https://brandbudd.com/images/hero/hero2.png",
    priceRange: "$$",
    openingHours: "Mo,Tu,We,Th,Fr 09:00-20:00 Sa 10:00-16:00",
    areaServed: {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.5204",
        "longitude": "73.8567"
      },
      "geoRadius": "50000"
    },
    keywords: "digital marketing, web development, SEO, software development, Pune, Mumbai, Kolhapur, Marathi, global digital agency"
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="BiRP1TJA1qZH-SPRsnaUcHt5adjnkdVCl98onNMtuLQ" />
        <link rel="alternate" hrefLang="en" href="https://brandbudd.com" />
        
        {/* Canonical link will be overridden by individual pages */}
        <link rel="canonical" href="https://brandbudd.com" />
        
        {/* Structured data for organization */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
        
        {/* Google Analytics */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-GG9ZTDC5E7" 
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GG9ZTDC5E7');
          `}
        </Script>
      </body>
    </html>
  );
}