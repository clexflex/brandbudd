import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'Sparsh Prajapati - Co-Founder & Lead Developer | BrandBudd',
    description: 'Sparsh Prajapati is a skilled software developer with expertise in Java, web technologies, back-end development, and databases, serving clients globally from Maharashtra, India.',
    keywords: [
      'Sparsh Prajapati',
      'software developer',
      'Java developer',
      'web technologies expert',
      'Angular developer',
      'Spring Boot specialist',
      'Microservices architect',
      '.NET developer',
      'Node.js expert',
      'Express.js developer',
      'database specialist',
      'MySQL expert',
      'MongoDB developer',
      'BrandBudd co-founder',
      'Indian software engineer'
    ],
    path: '/sparsh',
    ogImage: '/images/team/sparsh1.png'
});

export default function SparshLayout({ children }) {
    return children;
}