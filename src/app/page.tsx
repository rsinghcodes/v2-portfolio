'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import Icon3D from '../components/3DIcon';
import NavItems from '../components/NavItems';
import SocialIcons from '../components/SocialIcons';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  // Typewriter alternating title state
  const titles = ['Software Engineer', 'Full Stack Developer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const experience = [
    {
      logo: '/assets/college.png',
      alt: 'American Technology Consulting Logo',
      time: 'Aug 2024 - Present',
      title: 'Pursuing Master of Computer Applications',
      time_count: '2 years',
      desc: 'Coursework: Software Engineering, AI & ML, Data Structure Design and Analysis of Algorithms, Database Management System, Computer Networks',
      company: 'Dr. APJ Abdul Kalam Technical University, Lucknow',
    },
    {
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Jan 2023 - Aug 2024',
      title: 'Software Engineer 1',
      time_count: '1 year 8 months',
      desc: 'Worked as a Full Stack Engineer, building APIs and documentation for Auzmor (an Employee Experience platform) and co-developing the Reveal application — a survey-based management tool—from scratch, covering both frontend and backend.',
      company: 'American Technology Consulting',
    },
    {
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Jun 2022 - Dec 2022',
      time_count: '7 months',
      title: 'Associate Software Engineer',
      desc: 'Contributed to the Freshflows team (B2B SaaS product) by developing user interfaces/components and integrating backend APIs to deliver seamless functionality.',
      company: 'American Technology Consulting',
    },
    {
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Mar 2022 - May 2022',
      time_count: '3 months',
      title: 'Software Engineer Intern',
      desc: 'Developed an Employee Time Tracking web application using React, Express.js, Node.js, and MongoDB, enabling employees to log work hours and provide detailed descriptions of tasks performed. ',
      company: 'American Technology Consulting',
    },
    {
      logo: '/assets/magazine3.png',
      alt: 'Magazine3 Technologies',
      time: 'May 2021 - Oct 2021',
      time_count: '6 months',
      title: 'Magazine3 Technologies',
      desc: 'Enhanced website performance and user experience by optimizing Core Web Vitals (LCP, CLS, TTFB) through image optimization, caching strategies, and code minification, achieving high PageSpeed and Lighthouse scores.',
      company: 'Junior Developer',
    },
  ];

  const projects = [
    {
      title: 'ReadList - A blog web app',
      description:
        'ReadList is a blogging platform where users can share written content and ideas. This app allows readers to read, like, comment, and share on other platforms and social media.',
      tech: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Apollo Server'],
      image: '/assets/projects/readlist.png',
      link: 'https://github.com/rsinghcodes/readlist',
      live: 'https://readlistapp.netlify.app/',
    },
    {
      title: 'Votify - A mobile voting app',
      description:
        'A high-performance mobile voting application designed for speed, security, and simplicity. Votify leverages modern web technologies to provide a reliable voting experience.',
      tech: ['React Native', 'Supabase', 'Expo'],
      image: '/assets/projects/votify.png',
      link: 'https://github.com/rsinghcodes/votify',
      live: 'https://github.com/rsinghcodes/votify',
    },
    {
      title: 'InterCup - An interview preparation app',
      description:
        'InterCup is an interview preparation app that helps users prepare for interviews by providing a platform to practice and track their progress.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/assets/projects/intercup.png',
      link: 'https://github.com/rsinghcodes/intercup',
      live: 'https://intercup.netlify.app/',
    },
  ];

  const certifications = [
    {
      href: 'https://www.hackerrank.com/certificates/0377f0ca48fa',
      logo: '/assets/hackerrank-logo.png',
      alt: 'HackerRank',
      title: 'Software Engineer Intern',
      date: 'Aug 2024',
      org: 'HackerRank',
    },
    {
      href: 'https://www.hackerrank.com/certificates/f32c792e4bf9',
      logo: '/assets/hackerrank-logo.png',
      alt: 'HackerRank',
      title: 'Frontend Developer (React)',
      date: 'Aug 2024',
      org: 'HackerRank',
    },
    {
      href: 'http://ude.my/UC-6c946f39-3f52-43bd-bbf9-69662ab408fa',
      logo: '/assets/udemy-logo.png',
      alt: 'Udemy',
      title: 'Linux Administration Bootcamp: Go from Beginner to Advanced',
      date: 'Mar 2023',
      org: 'Udemy',
    },
    {
      href: 'https://coursera.org/share/173f0186a12f6bb1a00536de9540c357',
      logo: '/assets/coursera-logo.png',
      alt: 'Coursera',
      title: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript',
      date: 'May 2020',
      org: 'Coursera',
    },
  ];

  // Animation variants for staggered project cards
  const projectListVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };
  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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

  if (!isLoaded) return null;

  return (
    <main className="font-sans min-h-screen bg-background text-foreground relative max-w-2xl mx-auto md:mt-10 space-y-16 py-10 sm:py-16 px-2 sm:px-6">
      {/* Navigation */}
      <NavItems />

      {/* Email Fixed on the right side of the screen */}
      <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden lg:block">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-foreground">
          <a
            className="my-5 mx-auto p-2.5 text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-accent-gradient text-accent-gradient"
            style={{ writingMode: 'vertical-rl' }}
            href={`mailto:raghvendrrsingh@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            raghvendrrsingh@gmail.com
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative glass section-border rounded-elegant p-5 sm:p-8"
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
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I&apos;m Raghvendra 👋
          </motion.h1>
          <motion.h2
            className="block md:whitespace-nowrap tracking-tight md:text-2xl font-semibold overflow-hidden mb-2"
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
        className="glass section-border rounded-elegant p-5 sm:p-8"
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
            About
          </motion.h2>
          <div className="prose max-w-full font-sans text-muted-foreground prose-invert">
            <p>
              I&apos;m passionate about building innovative solutions that
              positively impact people&apos;s lives. I have over{' '}
              <strong>3 years of experience</strong> in software development,
              having worked for a startup to{' '}
              <strong>build B2B SaaS products</strong>. I am always eager to
              learn new things and to push the boundaries of what is possible.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative space-y-12 pt-8 px-2 sm:px-0"
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
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            Experience
          </motion.h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here&apos;s a summary of my professional journey and educational
            background in software development.
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
        className="relative flex flex-col min-h-0 gap-y-3 glass section-border rounded-elegant p-5"
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl font-extrabold mb-4"
        >
          Certifications
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
        className="relative space-y-12 py-8"
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
            My Projects
          </motion.div>
          <motion.h2
            variants={fadeSlide}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeSlide}
            className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Some of my recent work
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-8"
          variants={staggerSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="flex flex-col sm:flex-row glass section-border rounded-elegant overflow-hidden group transition-all duration-300 hover:scale-[1.025] hover:shadow-lg p-3 sm:p-5"
              variants={fadeSlide}
              whileHover={{ scale: 1.04, rotate: 1 }}
            >
              <div className="relative w-full h-48 sm:w-48 sm:h-28 aspect-video rounded border border-slate-200/10 transition overflow-hidden mb-3 sm:mb-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
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
                    className="items-center rounded-md border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-transparent bg-white text-background shadow hover:bg-accent hover:shadow-lg flex gap-2 px-2 py-2 sm:py-1 text-xs sm:text-[10px]"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center rounded-md border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-transparent bg-white text-background shadow hover:bg-accent hover:shadow-lg flex gap-2 px-2 py-2 sm:py-1 text-xs sm:text-[10px]"
                  >
                    <FiGlobe className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="relative">
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
            Contact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let&apos;s connect! Feel free to reach out{' '}
            <a
              className="underline text-white"
              href="https://www.linkedin.com/in/raghvendrrsingh"
            >
              via LinkedIn
            </a>{' '}
            or I&apos;ll get back to you as soon as I can.
          </p>
          <motion.a
            href="mailto:raghvendrrsingh@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold btn-accent mb-8 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon3D
              src="/icons/mail.png"
              alt="Email"
              size={20}
              hoverEffect={false}
            />
            raghvendrrsingh@gmail.com
          </motion.a>

          <SocialIcons />
        </motion.div>
      </section>
    </main>
  );
}
