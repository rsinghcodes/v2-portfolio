import Wrapper from '@/components/Wrapper';
import type { Metadata } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raghvendra Singh - Software Engineer',
  description:
    'Software Engineer with 3 years of experience in startups. Specializing in full-stack development, React, Node.js, and modern web technologies.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Startup',
    'Web Development',
  ],
  authors: [{ name: 'Raghvendra Singh' }],
  creator: 'Raghvendra Singh',
  openGraph: {
    title: 'Raghvendra Singh - Software Engineer',
    description:
      'Software Engineer with 3 years of experience in startups. Specializing in full-stack development, React, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghvendra Singh - Software Engineer',
    description:
      'Software Engineer with 3 years of experience in startups. Specializing in full-stack development, React, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
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
