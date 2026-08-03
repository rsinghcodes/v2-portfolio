import Wrapper from '@/components/Wrapper';
import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';
import './globals.css';
import portfolioData from '@/data/portfolio.json';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = portfolioData.metadata.siteUrl;
const ogImage = `${siteUrl}${portfolioData.metadata.openGraph.image}`;

const externalUrls = [
  ...portfolioData.socialLinks.map((link) => link.url),
  ...portfolioData.navItems
    .filter((item) => item.type === 'link' && !item.isInternal)
    .map((item) => item.href),
].filter((url, index, all) => all.indexOf(url) === index);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: portfolioData.personal.name,
      url: siteUrl,
      image: ogImage,
      jobTitle: 'AI Engineer & Full Stack Software Engineer',
      description: portfolioData.metadata.description,
      sameAs: externalUrls,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: portfolioData.metadata.title,
      description: portfolioData.metadata.description,
      inLanguage: 'en',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: portfolioData.metadata.title,
    template: `%s | Raghvendra Singh`,
  },
  description: portfolioData.metadata.description,
  keywords: portfolioData.metadata.keywords,
  authors: portfolioData.metadata.authors,
  creator: portfolioData.metadata.creator,
  publisher: portfolioData.metadata.publisher,
  category: portfolioData.metadata.category,
  classification: portfolioData.metadata.classification,
  applicationName: 'Raghvendra Singh',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: portfolioData.personal.name,
  },
  openGraph: {
    type: portfolioData.metadata.openGraph.type as 'website',
    locale: portfolioData.metadata.openGraph.locale,
    siteName: portfolioData.metadata.openGraph.siteName,
    url: portfolioData.metadata.openGraph.url,
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    images: [
      {
        url: ogImage,
        width: portfolioData.metadata.openGraph.imageWidth,
        height: portfolioData.metadata.openGraph.imageHeight,
        alt: portfolioData.metadata.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    creator: portfolioData.metadata.twitterHandle,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  other: {
    'msapplication-TileColor': '#111111',
    'msapplication-TileImage': '/icons/tile-150x150.png',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-title': portfolioData.personal.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
