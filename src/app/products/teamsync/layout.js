import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'TeamSync - Employee Management Solution | BrandBudd',
    description: 'TeamSync is a comprehensive employee management system with attendance tracking, leave management, and payroll processing capabilities. Available globally with dedicated support for India-based businesses.',
    keywords: [
      'employee management system',
      'attendance tracking software',
      'leave management solution',
      'payroll processing system',
      'HR software',
      'team management application',
      'workforce management tool',
      'staff attendance tracker',
      'employee data management',
      'Pune HR software',
      'Mumbai attendance system',
      'Kolhapur payroll solution',
      'Indian business HR tools',
      'Marathi interface HR software',
      'multilingual employee management',
      'TeamSync', 'employee management', 
      'attendance tracking', 
      'leave management', 
      'payroll processing',
    ],
    path: '/products/teamsync',
    ogImage: '/images/portfolio/teamsync-dashboard-preview.png'
});

export default function TeamSyncLayout({ children }) {
    return children;
}