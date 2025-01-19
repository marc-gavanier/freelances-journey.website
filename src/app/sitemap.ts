import { MetadataRoute } from 'next';
import { urlFromEnv } from '@/features/web';

export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: urlFromEnv(),
    lastModified: new Date()
  }
];

export default sitemap;
