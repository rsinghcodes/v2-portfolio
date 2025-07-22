"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Mouse,
  Server,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon3D from "../components/3DIcon";
import MobileNav from "../components/MobileNav";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState("About");
  // Typewriter alternating title state
  const titles = ["Software Engineer", "Full Stack Developer"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
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

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "skills", "projects", "contact"];
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: rect.top };
      });
      // Find the last section whose top is less than a threshold (e.g., 120px from top)
      const threshold = 120;
      const current = offsets
        .filter(({ top }) => top - threshold < 0)
        .sort((a, b) => b.top - a.top)[0];
      if (current) {
        const navName =
          current.id.charAt(0).toUpperCase() + current.id.slice(1);
        setActiveNav(navName);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    // Frontend
    { name: "React", icon: Code, level: 90, category: "Frontend" },
    { name: "TypeScript", icon: Code, level: 85, category: "Frontend" },
    { name: "Next.js", icon: Globe, level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: Code, level: 80, category: "Frontend" },
    { name: "Vue.js", icon: Code, level: 75, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: Server, level: 80, category: "Backend" },
    { name: "Python", icon: Server, level: 75, category: "Backend" },
    { name: "Express.js", icon: Server, level: 80, category: "Backend" },
    { name: "FastAPI", icon: Server, level: 70, category: "Backend" },

    // Database
    { name: "PostgreSQL", icon: Database, level: 70, category: "Database" },
    { name: "MongoDB", icon: Database, level: 65, category: "Database" },
    { name: "Redis", icon: Database, level: 60, category: "Database" },

    // DevOps
    { name: "Docker", icon: Wrench, level: 70, category: "DevOps" },
    { name: "AWS", icon: Cloud, level: 65, category: "DevOps" },
    { name: "CI/CD", icon: Wrench, level: 70, category: "DevOps" },

    // Tools
    { name: "Git", icon: Wrench, level: 85, category: "Tools" },
    { name: "VS Code", icon: Wrench, level: 90, category: "Tools" },
    { name: "Postman", icon: Wrench, level: 75, category: "Tools" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/project1.jpg",
      link: "https://github.com/johndoe/ecommerce",
      live: "https://ecommerce-demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      image: "/project2.jpg",
      link: "https://github.com/johndoe/taskapp",
      live: "https://taskapp-demo.com",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by OpenAI API with natural language processing and conversation memory.",
      tech: ["Python", "OpenAI API", "FastAPI", "React"],
      image: "/project3.jpg",
      link: "https://github.com/johndoe/aichat",
      live: "https://aichat-demo.com",
    },
  ];

  const socials = [
    {
      link: "https://linkedin.com/in/raghvendra-singh",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      link: "https://github.com/raghvendra-singh",
      icon: <Github className="w-5 h-5" />,
    },
    {
      link: "mailto:raghvendra.singh@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  if (!isLoaded) return null;

  return (
    <div className="font-sans min-h-screen bg-background text-foreground relative max-w-2xl mx-auto space-y-10 py-12 sm:py-24 px-6">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[50vw] md:max-w-sm px-2.5 py-3 rounded-3xl shadow-lg bg-background/60 backdrop-blur-xl border border-border">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex space-x-6">
            {["Experience", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveNav(item)}
                className={`hover:text-foreground transition-colors nav-3d ${
                  activeNav === item
                    ? "font-bold text-cyan-400 underline underline-offset-4"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <MobileNav navItems={["Work", "Skills", "Projects", "Contact"]} />
        </div>
      </nav>

      {/* Email Fixed on the right side of the screen */}
      <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden lg:block">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-white">
          <a
            className="my-5 mx-auto p-2.5 font-mono text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-foreground"
            style={{ writingMode: "vertical-rl" }}
            href={`mailto:raghvendra.singh@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            raghvendra.singh@gmail.com
          </a>
        </div>
      </div>

      <div className="w-10 fixed bottom-0 left-10 right-auto z-10 hidden lg:block">
        <ul className="flex flex-col items-center m-0 p-0 list-none after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-white">
          {socials.map(({ link, icon }, i) => (
            <li
              className="mx-2.5 my-3 last-of-type:mb-3 hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-foreground"
              key={i}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gap-y-4 flex flex-col items-start justify-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I'm Raghvendra 👋
          </h1>
          <h2 className="block md:whitespace-nowrap font-medium tracking-tight text-lg md:text-2xl overflow-hidden anim-typewriter">
            {displayedText}
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Building innovative solutions for startups with 3 years of
            experience in full-stack development
          </p>
        </motion.div>
        {/* Scroll Down Icon */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center cursor-pointer group"
          aria-label="Scroll down to About section"
        >
          <Mouse className="w-8 h-8 text-cyan-400 group-hover:text-primary transition-colors" />

          <span className="mt-2 text-xs text-muted-foreground">
            Scroll Down
          </span>
        </motion.a>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-2"
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
          <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                <Image
                  src="/assets/atc-logo.webp"
                  width={48}
                  height={48}
                  alt="American Technology Consulting Logo"
                  className="aspect-square object-contain"
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground">
                Jan 2023 - Aug 2024
              </time>
              <h2 className="font-semibold leading-none">
                American Technology Consulting
              </h2>
              <span className="prose dark:prose-invert text-sm text-muted-foreground">
                Developed a mobile game that uses Gemini AI to create
                interactive mystery stories where players solve puzzles through
                voice or text interactions.
              </span>
            </div>
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              <div
                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2"
                title="Software Engineer 1"
              >
                Software Engineer 1
              </div>
            </div>
          </li>
          <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                <Image
                  src="/assets/atc-logo.webp"
                  width={48}
                  height={48}
                  alt="American Technology Consulting Logo"
                  className="aspect-square object-contain"
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground">
                Jun 2022 - Dec 2022
              </time>
              <h2 className="font-semibold leading-none">
                American Technology Consulting
              </h2>
              <span className="prose dark:prose-invert text-sm text-muted-foreground">
                Developed a mobile game that uses Gemini AI to create
                interactive mystery stories where players solve puzzles through
                voice or text interactions.
              </span>
            </div>
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              <div
                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2"
                title="Associate Software Engineer"
              >
                Associate Software Engineer
              </div>
            </div>
          </li>
          <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                <Image
                  src="/assets/atc-logo.webp"
                  width={48}
                  height={48}
                  alt="American Technology Consulting Logo"
                  className="aspect-square object-contain"
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground">
                Mar 2022 - May 2022
              </time>
              <h2 className="font-semibold leading-none">
                American Technology Consulting
              </h2>
              <span className="prose dark:prose-invert text-sm text-muted-foreground">
                Developed a mobile game that uses Gemini AI to create
                interactive mystery stories where players solve puzzles through
                voice or text interactions.
              </span>
            </div>
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              <div
                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2"
                title="Software Engineer Intern"
              >
                Software Engineer Intern
              </div>
            </div>
          </li>
          <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                <Image
                  className="aspect-square h-full w-full object-contain"
                  alt="Magazine3 Technologies"
                  src="/assets/magazine3.png"
                  width={48}
                  height={48}
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground">
                May 2021 - Oct 2021
              </time>
              <h2 className="font-semibold leading-none">
                Magazine3 Technologies
              </h2>
              <span className="prose dark:prose-invert text-sm text-muted-foreground">
                Developed an AI-powered application that automatically extracts
                and organizes data from uploaded files (images, videos, audio)
                into structured table records.
              </span>
            </div>
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              <div
                className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2"
                title="Junior Developer"
              >
                Junior Developer
              </div>
            </div>
          </li>
        </motion.ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Technical Skills
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies and tools I work with
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border overflow-hidden card-3d group"
            >
              <div className="h-48 bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Icon3D
                  src="/icons/Cone.png"
                  alt="Project Icon"
                  size={80}
                  className="opacity-60"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
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
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-2"
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.a
              href="mailto:john.doe@example.com"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold btn-3d"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon3D
                src="/icons/mail.png"
                alt="Email"
                size={20}
                hoverEffect={false}
              />
              john.doe@example.com
            </motion.a>
          </div>
          <SocialIcons />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Raghvendra Singh. Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
