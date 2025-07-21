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
  Server,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import Icon3D from "../components/3DIcon";
import MobileNav from "../components/MobileNav";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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

  if (!isLoaded) return null;

  return (
    <div className="font-sans min-h-screen bg-background text-foreground relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/bg.png)" }}
      >
        <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              John Doe
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-foreground transition-colors nav-3d"
                >
                  {item}
                </a>
              ))}
            </div>
            <MobileNav navItems={["About", "Skills", "Projects", "Contact"]} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-3">
              Raghvendra Singh
            </h1>
            <h1 className="block md:whitespace-nowrap border-r-2 border-orange-500 font-mono text-xl md:text-3xl pr-1 md:pr-2 mb-3 mx-auto overflow-hidden anim-typewriter">
              Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building innovative solutions for startups with 3 years of
              experience in full-stack development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold btn-3d flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
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
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
      <section id="skills" className="relative z-10 py-20 px-6 bg-muted/50">
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
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
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
      <section id="contact" className="relative z-10 py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I&apos;m always open to discussing new opportunities and
              interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.a
                href="mailto:john.doe@example.com"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold btn-3d"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with Next.js and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
