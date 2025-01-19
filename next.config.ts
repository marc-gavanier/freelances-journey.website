import type { NextConfig } from 'next';

const isDefinedAssetPrefix = process.env['NEXT_PUBLIC_ASSET_PREFIX'] != null && process.env['NEXT_PUBLIC_ASSET_PREFIX'] !== '';

const nextConfig: NextConfig = {
  basePath: process.env['NEXT_PUBLIC_BASE_PATH'] ?? '',
  assetPrefix: process.env['NEXT_PUBLIC_ASSET_PREFIX'] ?? '',
  output: 'export',
  images: {
    unoptimized: true
  },
  sassOptions: {
    additionalData: `$asset-prefix: ${isDefinedAssetPrefix ? process.env['NEXT_PUBLIC_ASSET_PREFIX'] : "''"};`
  }
};

export default nextConfig;
