/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://brandbudd.com',
    generateRobotsTxt: false, // We already created a custom robots.txt
    exclude: ['/api/*', '/404', '/500'],
    generateIndexSitemap: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api', '/_next/static/']
        }
      ]
    },
    transform: async (config, path) => {
      // Custom priority rules
      let priority = 0.7;
      
      if (path === '/') {
        priority = 1.0;
      } else if (path.startsWith('/services') || path.startsWith('/products')) {
        priority = 0.9;
      } else if (path.startsWith('/portfolio')) {
        priority = 0.8;
      } else if (path.startsWith('/about') || path.startsWith('/contact')) {
        priority = 0.7;
      }
      
      // Custom change frequency rules
      let changefreq = 'weekly';
      
      if (path === '/') {
        changefreq = 'daily';
      } else if (path.startsWith('/blog')) {
        changefreq = 'daily';
      }
      
      return {
        loc: path,
        changefreq,
        priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    },
  };