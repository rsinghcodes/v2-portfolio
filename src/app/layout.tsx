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
  title: 'Raghvendra Singh - Software Engineer & Full Stack Developer',
  description:
    'Software Engineer with 3+ years of experience specializing in full-stack development, React, Node.js, Python, modern web and AI technologies. Building innovative B2B SaaS solutions with expertise in TypeScript, Next.js, Python, AI and cloud technologies.',
  keywords: [
    'Software Engineer',
    'Python Developer',
    'AI Developer',
    'Machine Learning Engineer',
    'AI Enthusiast',
    'Full Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Frontend Development',
    'Backend Development',
    'MongoDB',
    'GraphQL',
    'React Native',
    'Docker',
    'AWS',
    'Django',
    'FastAPI',
    'Supabase',
    'LangChain',
    'LLM',
    'PostgreSQL',
  ],
  authors: [{ name: 'Raghvendra Singh' }],
  creator: 'Raghvendra Singh',
  publisher: 'Raghvendra Singh',
  category: 'Technology',
  classification: 'Portfolio',
  openGraph: {
    title: 'Raghvendra Singh - Software Engineer & Full Stack Developer',
    description:
      'Software Engineer with 3+ years of experience specializing in full-stack development, React, Node.js, Python, and modern web technologies. Building innovative B2B SaaS solutions with expertise in TypeScript, Next.js, Python, AI and cloud technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: "Raghvendra's Portfolio",
    url: 'https://rsingh.codes',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D5603AQEtnpHVtwu1AQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716317546059?e=1761177600&v=beta&t=tDJRNkcJ2EEAGDmRCgvU2Fv-JOLZFClBfpseSHs6kVU',
        width: 800,
        height: 800,
        alt: 'Raghvendra Singh - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghvendra Singh - Software Engineer & Full Stack Developer',
    description:
      'Software Engineer with 3+ years of experience specializing in full-stack development, React, Node.js, Python, and modern web technologies. Building innovative B2B SaaS solutions.',
    creator: '@raghvendrrsingh',
    images: [
      'https://media.licdn.com/dms/image/v2/D5603AQEtnpHVtwu1AQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716317546059?e=1761177600&v=beta&t=tDJRNkcJ2EEAGDmRCgvU2Fv-JOLZFClBfpseSHs6kVU',
    ],
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
    canonical: 'https://www.rsingh.codes',
  },
  // verification: {
  //   google: 'your-google-verification-code',
  // },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Raghvendra Singh',
    'application-name': 'Raghvendra Singh Portfolio',
    'msapplication-TileColor': '#000000',
    // 'msapplication-config': '/browserconfig.xml',
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
