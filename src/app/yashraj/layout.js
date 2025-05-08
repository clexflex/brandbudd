import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'Yashraj Ghosalkar - Founder & Lead Developer | BrandBudd',
    description: 'Yashraj Ghosalkar is a skilled web developer and digital marketing specialist with expertise in React, Node.js, and MongoDB, serving clients globally from Kolhapur, Maharashtra.',
    keywords: [
      'Yashraj Ghosalkar',
      'full-stack developer',
      'web developer in Kolhapur',
      'MERN stack developer',
      'digital marketing specialist',
      'React developer India',
      'Node.js expert Maharashtra',
      'MongoDB developer',
      'BrandBudd founder',
      'Marathi-speaking developer',
      'global software developer from India',
      'Kolhapur tech entrepreneur',
      'Indian web development expert',
      'remote development services',
      'software engineer portfolio'
    ],
    path: '/yashraj',
    ogImage: '/images/team/yashraj.jpeg'
});

export default function YashrajLayout({ children }) {
    return children;
}