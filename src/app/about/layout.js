import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'About Us - BrandBudd | Digital Marketing & Software Development Agency',
    description: 'BrandBudd is a global digital agency founded in 2023, providing expert digital marketing, web development, and software solutions worldwide with roots in India. We serve clients in English, Hindi, and Marathi.',
    keywords: [
      'digital marketing agency history',
      'web development company values',
      'software development team',
      'BrandBudd founders',
      'digital agency expertise',
      'Pune digital agency team',
      'Mumbai web development professionals',
      'Kolhapur software developers',
      'Marathi-speaking digital experts',
      'global digital agency with Indian roots',
      'India-based international agency',
      'remote digital services',
      'multilingual digital consultancy',
      'digital transformation specialists',
      'client-centered agency approach'
    ],
    path: '/about',
    ogImage: '/animations/team-work.lottie'
});

export default function AboutLayout({ children }) {
    return children;
}