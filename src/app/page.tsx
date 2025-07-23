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
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Jan 2023 - Aug 2024',
      title: 'Software Engineer',
      desc: 'Developed a mobile game that uses Gemini AI to create interactive mystery stories where players solve puzzles through voice or text interactions.',
      company: 'American Technology Consulting',
      companyTitle: 'American Technology Consulting',
    },
    {
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Jun 2022 - Dec 2022',
      title: 'Associate Software Engineer',
      desc: 'Developed a mobile game that uses Gemini AI to create interactive mystery stories where players solve puzzles through voice or text interactions.',
      company: 'American Technology Consulting',
      companyTitle: 'American Technology Consulting',
    },
    {
      logo: '/assets/atc-logo.webp',
      alt: 'American Technology Consulting Logo',
      time: 'Mar 2022 - May 2022',
      title: 'Software Engineer Intern',
      desc: 'Developed a mobile game that uses Gemini AI to create interactive mystery stories where players solve puzzles through voice or text interactions.',
      company: 'American Technology Consulting',
      companyTitle: 'American Technology Consulting',
    },
    {
      logo: '/assets/magazine3.png',
      alt: 'Magazine3 Technologies',
      time: 'May 2021 - Oct 2021',
      title: 'Magazine3 Technologies',
      desc: 'Developed an AI-powered application that automatically extracts and organizes data from uploaded files (images, videos, audio) into structured table records.',
      company: 'Junior Developer',
      companyTitle: 'Junior Developer',
    },
  ];

  const projects = [
    {
      title: 'ReadList - A blog web app',
      description:
        'ReadList is a blogging platform where users can share written content and ideas. This app allows readers to read, like, comment, and share on other platforms and social media.',
      tech: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Apollo Server'],
      image: '/project1.jpg',
      link: 'https://github.com/rsinghcodes/readlist',
      live: 'https://readlistapp.netlify.app/',
    },
    {
      title: 'Votify - A mobile voting app',
      description:
        'A high-performance mobile voting application designed for speed, security, and simplicity. Votify leverages modern web technologies to provide a reliable voting experience.',
      tech: ['React Native', 'Supabase', 'Expo'],
      image: '/project2.jpg',
      link: 'https://github.com/rsinghcodes/votify',
      live: 'https://github.com/rsinghcodes/votify',
    },
    {
      title: 'InterCup - An interview preparation app',
      description:
        'InterCup is an interview preparation app that helps users prepare for interviews by providing a platform to practice and track their progress.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/project3.jpg',
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

  if (!isLoaded) return null;

  return (
    <main className="font-sans min-h-screen bg-background text-foreground relative max-w-2xl mx-auto md:mt-10 space-y-10 py-12 sm:py-24 px-6">
      {/* Navigation */}
      <NavItems />

      {/* Email Fixed on the right side of the screen */}
      <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden lg:block">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-white">
          <a
            className="my-5 mx-auto p-2.5 font-mono text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-foreground"
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
      <section id="hero" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gap-y-4 flex flex-col items-start justify-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Raghvendra 👋
          </h1>
          <h2 className="block md:whitespace-nowrap font-medium tracking-tight text-xl overflow-hidden anim-typewriter">
            {displayedText}
          </h2>
        </motion.div>
      </section>

      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold">About</h2>
          <div className="prose max-w-full font-sans text-muted-foreground dark:prose-invert">
            <p>
              I&apos;m passionate about building innovative solutions and that
              makes impact on people&apos;s lives.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative space-y-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Work
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Experience
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here&apos;s a summary of my professional journey and background in
            software development.
          </p>
        </motion.div>
        <motion.ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {experience.map((exp, idx) => (
            <motion.li
              key={exp.time + exp.title}
              className="relative ml-10 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
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
              </div>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <time className="text-xs text-muted-foreground">
                  {exp.time}
                </time>
                <h2 className="font-semibold leading-none">{exp.title}</h2>
                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                  {exp.desc}
                </span>
              </div>
              <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                <div
                  className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2"
                  title={exp.companyTitle}
                >
                  {exp.company}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section
        id="certifications"
        className="relative flex flex-col min-h-0 gap-y-3"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl font-bold"
        >
          Certifications
        </motion.h2>
        {certifications.map((cert, idx) => (
          <motion.a
            key={cert.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block cursor-pointer"
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
                    className="aspect-square h-full w-full object-contain"
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
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
      <section id="projects" className="relative space-y-12 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-card rounded-lg overflow-hidden card-3d group shadow-md transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm hover:shadow-lg"
            >
              <div className="h-48 md:h-auto md:w-48 bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Icon3D
                  src="/icons/Cone.png"
                  alt="Project Icon"
                  size={80}
                  className="opacity-60"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-2 p-2">
                <h3 className="font-semibold tracking-tight mt-1 text-base">
                  {project.title}
                </h3>
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&>*]:!leading-tight">
                  <p>{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white text-background shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white text-background shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]"
                  >
                    <FiGlobe className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid place-items-center space-y-3 px-4 text-center md:px-6 w-full py-12"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let&apos;s connect! Feel free to reach out{' '}
            <a
              className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
              href="https://www.linkedin.com/in/raghvendrrsingh"
            >
              via LinkedIn
            </a>{' '}
            or I&apos;ll get back to you as soon as I can.
          </p>
          <motion.a
            href="mailto:raghvendrrsingh@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold btn-3d mb-8"
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
