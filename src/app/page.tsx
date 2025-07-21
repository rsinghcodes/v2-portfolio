"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
  Wrench,
} from "lucide-react";
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
    <div className="font-sans min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] md:max-w-2xl lg:max-w-3xl px-4 py-3 rounded-2xl shadow-lg bg-background/60 backdrop-blur-xl border border-border">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
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
          <MobileNav navItems={["About", "Skills", "Projects", "Contact"]} />
        </div>
      </nav>

      {/* Email Fixed on the right side of the screen */}
      <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden md:block">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-gray-600">
          <a
            className="my-5 mx-auto p-2.5 font-mono text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-cyan-400"
            style={{ writingMode: "vertical-rl" }}
            href={`mailto:raghvendra.singh@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            raghvendra.singh@gmail.com
          </a>
        </div>
      </div>

      <div className="w-10 fixed bottom-0 left-10 right-auto z-10 hidden md:block">
        <ul className="flex flex-col items-center m-0 p-0 list-none after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-600">
          {socials.map(({ link, icon }, i) => (
            <li
              className="mx-2.5 my-3 last-of-type:mb-3 hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-cyan-400"
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
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Raghvendra Singh
            </h1>
            <h2 className="block md:whitespace-nowrap font-medium text-lg md:text-2xl pr-1 md:pr-2 mb-3 mx-auto overflow-hidden anim-typewriter">
              {displayedText}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building innovative solutions for startups with 3 years of
              experience in full-stack development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold btn-3d flex items-center justify-center gap-2"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-border rounded-lg font-semibold btn-3d flex items-center justify-center gap-2"
              >
                Download Resume <Download className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate software engineer with 3 years of experience building
              scalable applications for startups. I specialize in modern web
              technologies and love creating user-centric solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Development",
                description:
                  "Building complete web applications from frontend to backend with modern technologies.",
                icon: (
                  <Icon3D src="/icons/Code.png" alt="Code" className="float" />
                ),
              },
              {
                title: "Startup Experience",
                description:
                  "3 years of experience working in fast-paced startup environments, delivering MVPs and scaling applications.",
                icon: (
                  <Icon3D
                    src="/icons/rocket.png"
                    alt="Code"
                    className="float"
                  />
                ),
              },
              {
                title: "Problem Solving",
                description:
                  "Strong analytical skills to identify and solve complex technical challenges efficiently.",
                icon: (
                  <Icon3D
                    src="/icons/problem_solving.png"
                    alt="Code"
                    className="float"
                  />
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-lg border border-border card-3d group"
              >
                <motion.div
                  key={index}
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-4xl font-bold mb-4">Technical Skills </h2>
              <Icon3D
                src="/icons/flash.png"
                alt="Skills"
                size={40}
                className="mb-4"
              />
            </div>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          {["Frontend", "Backend", "Database", "DevOps", "Tools"].map(
            (category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-card rounded-lg border border-border card-3d group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="icon-3d">
                            <skill.icon className="w-8 h-8 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2">{skill.name}</h3>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center py-20 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
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
      <footer className="relative py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Raghvendra Singh. Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
