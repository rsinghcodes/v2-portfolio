'use client';

import Icon3D from '@/components/3DIcon';
import SocialIcons from '@/components/SocialIcons';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import TiltCard from '@/components/TiltCard';
import Hero3DObject from '@/components/Hero3DObject';
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
        className="relative glass section-border rounded-elegant p-5 sm:p-8 flex justify-between gap-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gap-y-4 flex flex-col items-start justify-center"
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
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
        >
          {/* 3D Hero Object */}
          <Hero3DObject />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <TiltCard key={skillGroup.category} className={skillGroup.colSpan}>
              <div className="h-full w-full glass section-border rounded-elegant p-6 flex flex-col justify-start hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className={`px-3 py-1 text-sm rounded-full font-semibold tracking-wide ${skillGroup.bgClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
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
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
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
        <motion.ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {experience.map((exp, idx) => (
            <motion.li
              key={exp.time + exp.title}
              className="relative ml-10 py-4"
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full border w-12 h-12 shadow-sm"
                variants={dotVariants}
                whileHover="hover"
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                  <Image
                    src={exp.logo}
                    width={48}
                    height={48}
                    alt={exp.alt}
                    className={
                      exp.logo.includes('magazine3')
                        ? 'aspect-square h-full w-full object-contain'
                        : 'aspect-square object-contain'
                    }
                  />
                </span>
              </motion.div>
              <div className="flex-1 flex flex-col justify-start gap-1 bg-transparent">
                <time className="text-xs text-muted-foreground">
                  {exp.time} • {exp.time_count}
                </time>
                <h2 className="font-semibold leading-none">{exp.title}</h2>
                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                  {exp.desc}
                </span>
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                  <div
                    className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 flex gap-2"
                    title={exp.company}
                  >
                    {exp.company}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

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
            className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
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
            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {sections.projects.description}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-8"
          variants={staggerSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div variants={fadeSlide} key={project.title}>
              <TiltCard>
                <div
                  className="flex flex-col sm:flex-row glass section-border rounded-elegant overflow-hidden group transition-all duration-300 hover:shadow-lg p-3 sm:p-5 h-full w-full"
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

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
