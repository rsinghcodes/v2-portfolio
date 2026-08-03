import type { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: portfolioData.metadata.title,
    short_name: portfolioData.personal.name,
    description: portfolioData.metadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#111111',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
