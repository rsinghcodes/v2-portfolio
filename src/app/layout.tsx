import Wrapper from '@/components/Wrapper';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: portfolioData.metadata.title,
  description: portfolioData.metadata.description,
  keywords: portfolioData.metadata.keywords,
  authors: portfolioData.metadata.authors,
  creator: portfolioData.metadata.creator,
  publisher: portfolioData.metadata.publisher,
  category: portfolioData.metadata.category,
  classification: portfolioData.metadata.classification,
  openGraph: {
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    type: portfolioData.metadata.openGraph.type as 'website',
    locale: portfolioData.metadata.openGraph.locale,
    siteName: portfolioData.metadata.openGraph.siteName,
    url: portfolioData.metadata.openGraph.url,
    images: [
      {
        url: portfolioData.metadata.openGraph.image,
        width: 800,
        height: 800,
        alt: portfolioData.metadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.metadata.title,
    description: portfolioData.metadata.description,
    creator: portfolioData.metadata.twitterHandle,
    images: [portfolioData.metadata.openGraph.image],
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
    canonical: portfolioData.metadata.openGraph.url,
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': portfolioData.personal.name,
    'application-name': portfolioData.metadata.title,
    'msapplication-TileColor': '#000000',
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
      </body>
    </html>
  );
}
