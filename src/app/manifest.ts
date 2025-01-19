import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

export const dynamic = 'force-static';

const iconsDirectory = path.join(process.cwd(), 'public/images/icons');
const listFilesInDirectory = (dir: string): string[] => fs.readdirSync(dir).map((file) => path.join('/images/icons', file));

const sizeFromFineName = (src: string): { sizes?: string } => {
  const sizes: string | undefined = src.match(/\d+x\d+/)?.[0];
  return sizes ? { sizes } : {};
};

const webManifest = (): MetadataRoute.Manifest => ({
  name: 'Freelances Journey',
  description: 'La journée lyonnaise qui met à l’honneur l’aventure du freelancing',
  start_url: '/',
  display: 'standalone',
  background_color: '#fdfdfd',
  theme_color: '#db780f',
  icons: listFilesInDirectory(iconsDirectory).map((src: string) => ({
    src,
    ...sizeFromFineName(src),
    type: 'image/png'
  }))
});

export default webManifest;
