import { generateMetadata } from '@/utils/metadata';

export const metadata = generateMetadata({
    title: 'ExcelFlow360 - Excel Data Management Solution | BrandBudd',
    description: 'ExcelFlow360 is a powerful MERN stack application for managing employee data with Excel file uploads, user management, and EOD status tracking. Available globally with specialized support for India-based businesses.',
    keywords: [
      'Excel data management',
      'file processing system',
      'MERN stack application',
      'employee data solution',
      'Excel file automation',
      'data processing software',
      'EOD status tracking',
      'business data management',
      'Pune data solutions',
      'Mumbai Excel automation',
      'Kolhapur data processing',
      'Indian business Excel tools',
      'Marathi interface data software',
      'multilingual data management',
      'global Excel processing solution'
    ],
    path: '/products/excelflow360',
    ogImage: '/images/portfolio/excelflow360_dashboard-preview.png'
});

export default function ExcelFlow360Layout({ children }) {
    return children;
}