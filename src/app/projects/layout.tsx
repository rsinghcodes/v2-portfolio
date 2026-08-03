import type { Metadata } from 'next';
import portfolioData from '@/data/portfolio.json';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore ${portfolioData.personal.name}'s projects — AI-powered applications, RAG pipelines, multi-agent systems, and full-stack SaaS products built with FastAPI, Next.js, LangGraph, and modern cloud technologies.`,
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
