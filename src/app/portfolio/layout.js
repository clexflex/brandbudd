import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
  title: 'Portfolio - Our Work | BrandBudd',
  description: 'Explore our diverse portfolio of successful digital marketing, web development, and software solution projects that have helped businesses grow globally, across India, and in Pune, Mumbai, and Kolhapur.',
  keywords: [
    'digital marketing portfolio',
    'web development projects',
    'software solution case studies',
    'TeamSync implementation examples',
    'ExcelFlow360 case studies',
    'digital transformation portfolio',
    'Pune web design projects',
    'Mumbai digital marketing success stories',
    'Kolhapur software projects',
    'Marathi website portfolio',
    'global digital project examples',
    'India software development portfolio',
    'ecommerce website examples',
    'healthcare portal case study',
    'custom software solutions',
    'MERN stack project portfolio'
  ],
  path: '/portfolio',
  ogImage: '/images/portfolio/teamsync-dashboard-preview.png'
});
  
export default function PortfolioLayout({ children }) {
  return children;
}