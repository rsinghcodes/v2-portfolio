'use client';

import Icon3D from '@/components/3DIcon';
import SocialIcons from '@/components/SocialIcons';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import TiltCard from '@/components/TiltCard';
import portfolioData from '@/data/portfolio.json';
import ProjectMockup from '@/components/ProjectMockup';

export default function Home() {
  // Typewriter alternating title state
  const titles = portfolioData.titles;
  const { experience, projects, certifications, skills, personal, sections } = portfolioData;
  const featuredProjects = projects.filter((project: any) => project.featured);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect for alternating titles
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayedText.length < titles[titleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            titles[titleIndex].slice(0, displayedText.length + 1)
          );
        }, 70);
      } else {
        // Pause after typing
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      // Erase effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(
            titles[titleIndex].slice(0, displayedText.length - 1)
          );
        }, 40);
      } else {
        // Switch to next title
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, titleIndex, titles]);

  // Animation variants for staggered section content
  const staggerSection = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };
  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  // Timeline dot animation
  const dotVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    show: {
      scale: 1.1,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
    },
    hover: { scale: 1.2, boxShadow: '0 0 0 4px rgba(127,90,240,0.15)' },
  };

  return (
    <>
      <ThemeToggle />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative glass section-border rounded-elegant p-5 sm:p-8 flex justify-start gap-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gap-y-4 flex flex-col items-start justify-center w-full"
          whileHover={{ y: -8, rotate: 1 }}
          style={{ willChange: 'transform' }}
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl/none"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {personal.greeting}
          </motion.h1>

          <motion.h2
            className="block md:whitespace-nowrap tracking-tight md:text-xl font-medium overflow-hidden"
            style={{
              minHeight: '1.5em',
              whiteSpace: 'pre',
              letterSpacing: '0.02em',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {displayedText}
            <span className="blinking-cursor">|</span>
          </motion.h2>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="glass section-border rounded-elegant p-5 sm:p-8 mt-8 sm:mt-12"
        variants={staggerSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeSlide}>
          <motion.h2
            variants={fadeSlide}
            className="text-2xl font-extrabold mb-4"
          >
            {sections.about.title}
          </motion.h2>
          <div className="prose max-w-full font-sans text-muted-foreground prose-invert">
            <p>
              {sections.about.content.map((segment, i) => (
                <span key={i} className={segment.highlight ? "text-foreground font-semibold" : ""}>
                  {segment.text}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="relative space-y-8 pt-8"
        variants={staggerSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeSlide} className="text-center space-y-2">
          <motion.div
            variants={fadeSlide}
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
          >
            {sections.skills.subtitle}
          </motion.div>
          <motion.h2
            variants={fadeSlide}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            {sections.skills.title}
          </motion.h2>
          <motion.p
            variants={fadeSlide}
            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {sections.skills.description}
          </motion.p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto mt-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-border last:border-b-0">
              <span className="font-bold text-sm sm:w-44 shrink-0 text-foreground">
                {skillGroup.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-secondary text-secondary-foreground hover:bg-muted px-2 py-0.5 text-xs font-medium transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative space-y-12 pt-16 px-2 sm:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold"
          >
            {sections.experience.subtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            {sections.experience.title}
          </motion.h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {sections.experience.description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 mt-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.time + exp.title}
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              {/* Header: Company + Verification */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.475 0-.928.09-1.348.246C14.773 2.51 13.483 1.5 12 1.5s-2.773 1.01-3.422 2.256a3.842 3.842 0 00-1.348-.246c-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.475 0 .928-.09 1.348-.246.649 1.246 1.939 2.256 3.422 2.256s2.773-1.01 3.422-2.256c.42.156.873.246 1.348.246 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z" fill="#3B82F6"/>
                    <path d="M9.75 16.25l-4-4 1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5-8 8z" fill="#FFF"/>
                  </svg>
                  <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                </div>
                <div className="flex justify-between items-center text-sm mt-1 flex-wrap gap-2">
                  <span className="font-semibold text-muted-foreground">{exp.title}</span>
                  <span className="text-sm text-muted-foreground">{exp.time}</span>
                </div>
              </div>

              {/* Body: Logo + Description Bullet Points */}
              <div className="flex gap-4 sm:gap-6 items-start mt-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center shadow-sm">
                  <Image
                    src={exp.logo}
                    width={64}
                    height={64}
                    alt={exp.alt}
                    className="object-contain w-8 h-8 sm:w-12 sm:h-12"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground flex-1">
                  {Array.isArray(exp.desc) ? (
                    exp.desc.map((bullet: string, bIdx: number) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))
                  ) : (
                    <li className="leading-relaxed">{exp.desc}</li>
                  )}
                </ul>
              </div>

              {/* Divider */}
              {idx < experience.length - 1 && (
                <hr className="my-8 border-t border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="relative space-y-12 py-16"
        variants={staggerSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeSlide} className="text-center space-y-2">
          <motion.div
            variants={fadeSlide}
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold animate-pulse"
          >
            {sections.projects.subtitle}
          </motion.div>
          <motion.h2
            variants={fadeSlide}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            {sections.projects.title}
          </motion.h2>
          <motion.p
            variants={fadeSlide}
            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto"
          >
            {sections.projects.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          variants={staggerSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div variants={fadeSlide} key={project.title} className="h-full">
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
        </motion.div>

        <motion.div 
          variants={fadeSlide}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted text-sm font-semibold transition-all shadow-sm hover:shadow-md group/btn"
          >
            <span>View All Projects</span>
            <svg 
              className="w-4 h-4 text-muted-foreground group-hover/btn:text-foreground group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      <section
        id="certifications"
        className="relative flex flex-col min-h-0 gap-y-3 glass section-border rounded-elegant p-5 mt-16"
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold mb-4"
        >
          {sections.certifications.title}
        </motion.h2>
        {certifications.map((cert) => (
          <motion.a
            key={cert.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block cursor-pointer group"
            href={cert.href}
          >
            <div className="rounded-lg text-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background">
                  <Image
                    width={48}
                    height={48}
                    src={cert.logo}
                    alt={cert.alt}
                    className="aspect-square h-full w-full object-contain shadow-md"
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm group-hover:underline">
                      {cert.title}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {cert.date}
                    </div>
                  </div>
                  <div className="font-sans text-xs">{cert.org}</div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid place-items-center space-y-3 px-4 text-center md:px-6 w-full py-12"
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
          >
            {sections.contact.subtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            {sections.contact.title}
          </motion.h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {sections.contact.description.textBeforeLink}
            <a
              className="underline text-foreground"
              href={sections.contact.description.linkUrl}
            >
              {sections.contact.description.linkText}
            </a>
            {sections.contact.description.textAfterLink}
          </p>
          <motion.a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-foreground text-background hover:bg-foreground/90 mb-8 focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon3D
              src="/icons/mail.png"
              alt="Email"
              size={20}
              hoverEffect={false}
            />
            {personal.email}
          </motion.a>

          <SocialIcons />
        </motion.div>
      </section>
    </>
  );
}
