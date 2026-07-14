'use client';

import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import ProjectMockup from '@/components/ProjectMockup';
import portfolioData from '@/data/portfolio.json';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <>
      <ThemeToggle />
      <h1 className="text-4xl font-extrabold mb-8 text-center">Projects</h1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="flex flex-col sm:flex-row glass section-border rounded-elegant overflow-hidden group transition-all duration-300 hover:scale-[1.025] hover:shadow-lg p-3 sm:p-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.18 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
          >
            <div className="relative w-full h-48 sm:w-56 sm:h-32 rounded border border-slate-200/10 transition overflow-hidden mb-3 sm:mb-0 flex-shrink-0">
              <ProjectMockup title={project.title} tech={project.tech} />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-2 pl-0 sm:pl-2">
              <h3 className="font-semibold tracking-tight mt-2 sm:mt-0 text-base">
                {project.title}
              </h3>
              <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&>*]:!leading-tight">
                <p>{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-0.5 text-xs font-mono tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center rounded-md border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-transparent bg-foreground text-background shadow hover:bg-accent hover:shadow-lg flex gap-2 px-2 py-2 sm:py-1 text-xs sm:text-[10px]"
                >
                  <FiGithub className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center rounded-md border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-transparent bg-foreground text-background shadow hover:bg-accent hover:shadow-lg flex gap-2 px-2 py-2 sm:py-1 text-xs sm:text-[10px]"
                >
                  <FiGlobe className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
