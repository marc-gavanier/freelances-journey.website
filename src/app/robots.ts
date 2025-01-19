import { MetadataRoute } from 'next';
import { urlFromEnv } from '@/features/web';

export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/private/'
  },
  sitemap: `${urlFromEnv()}/sitemap.xml`
});

export default robots;
