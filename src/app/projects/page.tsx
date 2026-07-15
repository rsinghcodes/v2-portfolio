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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ease-out h-full group">
              {/* Top Mockup Image */}
              <div className="relative h-40 w-full overflow-hidden border-b border-border flex-shrink-0">
                <ProjectMockup title={project.title} tech={project.tech} />
              </div>

              {/* Card Content Area */}
              <div className="flex flex-col flex-1 p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.dates && (
                    <time className="font-sans text-xs text-muted-foreground block">
                      {project.dates}
                    </time>
                  )}
                  <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&>*]:!leading-tight mt-2">
                    <p>{project.description}</p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-auto pt-4 flex flex-col">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1.5 py-0.5 text-[10px] font-semibold transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row flex-wrap items-center gap-1.5 mt-3 pt-1">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-[10px] font-semibold transition-colors border border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 h-7 px-2.5 gap-1.5"
                    >
                      <FiGlobe className="w-3.5 h-3.5" />
                      Website
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-[10px] font-semibold transition-colors border border-border bg-transparent text-foreground hover:bg-muted h-7 px-2.5 gap-1.5"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
