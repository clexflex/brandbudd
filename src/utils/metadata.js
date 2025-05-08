/**
 * Utility function to generate consistent metadata for pages
 */
export const generateMetadata = ({ 
    title, 
    description, 
    keywords = [], 
    path = "", 
    ogImage = "/images/hero/hero4.png" 
  }) => {
    // Base keywords that should appear on all pages
    const baseKeywords = [
      'digital marketing agency',
      'web development company',
      'software development services',
      'custom software solutions',
      'digital agency',
      'global digital services',
      'India digital agency',
      'Pune web development',
      'Mumbai digital marketing',
      'Kolhapur software development',
      'Marathi-speaking consultants',
      'multilingual digital services',
      'MERN stack development',
      'React developers'
    ];
  
    // Combine with page-specific keywords
    const allKeywords = [...baseKeywords, ...keywords].join(', ');
  
    // Canonical URL
    const canonicalUrl = `https://brandbudd.com${path}`;
  
    return {
      title,
      description,
      keywords: allKeywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: 'BrandBudd',
        locale: 'en_US',
        type: 'website',
        images: [
          {
            url: `https://brandbudd.com${ogImage}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`https://brandbudd.com${ogImage}`],
      },
    };
  };