import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
  title: 'Services - Digital Marketing & Web Development | BrandBudd',
  description: 'Comprehensive digital marketing, web development, SEO, and custom software solutions for businesses globally, with specialized services in India, Pune, Mumbai, and Kolhapur.',
  keywords: [
    'digital marketing services',
    'web development services',
    'SEO optimization',
    'content creation',
    'UI/UX design services',
    'software development solutions',
    'Pune digital agency services',
    'Mumbai web development company',
    ' SEO services',
    'Marathi website development',
    'multilingual digital marketing',
    'TeamSync implementation',
    'ExcelFlow360 setup',
    'MERN stack development services',
    'React development company',
    'digital marketing', 
    'web development', 
    ' content creation',
    ' hr software',
     'attendance managament website',
     'best digital marketing services',
     ' best web development services',
     ' best SEO services services', 
     'best content creation services',
     'best  UI/UX design services', 
     'best software development services',
      'best hr software services',
      ' best attendance managament software services',
  ],
  path: '/services',
  ogImage: '/images/hero/hero2.png'
});

export default function ServicesLayout({ children }) {
  return children;
}