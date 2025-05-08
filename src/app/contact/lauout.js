import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'Contact Us - BrandBudd | Digital Marketing & Software Development',
    description: 'Get in touch with BrandBudd for digital marketing, web development, and software solutions. Based in Maharashtra, India with services globally and consultations available in English, Hindi, and Marathi.',
    keywords: [
      'contact digital marketing agency',
      'hire web development company',
      'software development consultation',
      'digital marketing quote',
      'web development inquiry',
      'Pune digital agency contact',
      'Mumbai web development consultation',
      'Kolhapur software developers',
      'Maharashtra digital agency',
      'Marathi consultation services',
      'multilingual digital support',
      'global digital agency India',
      'remote digital services consultation',
      'contact for TeamSync demo',
      'ExcelFlow360 implementation inquiry'
    ],
    path: '/contact',
    ogImage: '/images/hero/hero4.png'
});

export default function ContactLayout({ children }) {
    return children;
}