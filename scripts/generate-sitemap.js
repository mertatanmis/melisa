import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://ozdemirlawoffice.net';

// Define your routes and their translations
const routes = {
  home: {
    en: '/',
    tr: '/tr',
    changefreq: 'weekly',
    priority: 1.0
  },
  services: {
    en: '/services',
    tr: '/tr/hizmetler',
    changefreq: 'monthly',
    priority: 0.8,
    subpages: {
      realEstate: {
        en: '/real-estate-law',
        tr: '/gayrimenkul-hukuku'
      },
      immigration: {
        en: '/immigration-citizenship',
        tr: '/goc-vatandaslik'
      },
      corporate: {
        en: '/corporate-law',
        tr: '/sirketler-hukuku'
      }
    }
  },
  location: {
    en: '/location',
    tr: '/tr/konum',
    changefreq: 'monthly',
    priority: 0.7
  },
  contact: {
    en: '/contact',
    tr: '/tr/iletisim',
    changefreq: 'monthly',
    priority: 0.9
  },
  legal: {
    pages: {
      privacy: {
        en: '/privacy-policy',
        tr: '/tr/gizlilik-politikasi'
      },
      terms: {
        en: '/terms-of-service',
        tr: '/tr/kullanim-kosullari'
      }
    },
    changefreq: 'yearly',
    priority: 0.3
  }
};

function generateUrl(path, changefreq, priority) {
  const enUrl = `${DOMAIN}${path.en}`;
  const trUrl = `${DOMAIN}${path.tr}`;

  return `
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${trUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  let urls = [];

  // Add main pages
  urls.push(generateUrl(routes.home, routes.home.changefreq, routes.home.priority));
  urls.push(generateUrl(routes.location, routes.location.changefreq, routes.location.priority));
  urls.push(generateUrl(routes.contact, routes.contact.changefreq, routes.contact.priority));

  // Add service pages
  Object.entries(routes.services.subpages).forEach(([_, paths]) => {
    urls.push(generateUrl(
      {
        en: `${routes.services.en}${paths.en}`,
        tr: `${routes.services.tr}${paths.tr}`
      },
      routes.services.changefreq,
      routes.services.priority
    ));
  });

  // Add legal pages
  Object.entries(routes.legal.pages).forEach(([_, paths]) => {
    urls.push(generateUrl(paths, routes.legal.changefreq, routes.legal.priority));
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap(); 