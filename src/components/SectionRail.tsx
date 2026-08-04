'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiAward,
  FiBriefcase,
  FiFolder,
  FiHome,
  FiMail,
  FiTerminal,
  FiUser,
} from 'react-icons/fi';
import portfolioData from '@/data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  home: <FiHome className="size-3" />,
  about: <FiUser className="size-3" />,
  skills: <FiTerminal className="size-3" />,
  experience: <FiBriefcase className="size-3" />,
  achievements: <FiAward className="size-3" />,
  projects: <FiFolder className="size-3" />,
  contact: <FiMail className="size-3" />,
};

const sectionItems = portfolioData.navItems.filter(
  (item) =>
    item.type === 'link' && item.isInternal && item.id && item.id !== 'home',
);

export default function SectionRail() {
  const [activeId, setActiveId] = useState<string>(sectionItems[0]?.id ?? '');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hasTargets, setHasTargets] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    let found = false;
    for (const section of sectionItems) {
      const el = document.getElementById(section.id!);
      if (el) {
        observer.observe(el);
        found = true;
      }
    }
    if (!found) setHasTargets(false);

    return () => observer.disconnect();
  }, []);

  if (!hasTargets) return null;

  const activeIndex = Math.max(
    0,
    sectionItems.findIndex((s) => s.id === activeId),
  );
  const fillPercent = ((activeIndex + 0.5) / sectionItems.length) * 100;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.assign(`/#${id}`);
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex"
    >
      <div className="relative h-[55vh] w-3">
        {/* Base track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-muted-foreground/20" />
        {/* Progress fill up to the active section */}
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] rounded-full bg-foreground/60"
          animate={{ height: `${fillPercent}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />

        {/* "Jump to" hint (desktop only) */}
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-6 hidden whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 lg:block">
          Jump to
        </span>

        {sectionItems.map((section, idx) => {
          const isActive = section.id === activeId;
          const isHovered = hoveredId === section.id;
          return (
            <div
              key={section.id}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${((idx + 0.5) / sectionItems.length) * 100}%` }}
            >
              <button
                type="button"
                onClick={() => handleClick(section.id!)}
                onMouseEnter={() => setHoveredId(section.id!)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={section.aria}
                className="group relative -m-2 block cursor-pointer rounded-full p-2"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-2.5 w-2.5 bg-foreground'
                      : 'h-2 w-2 bg-muted-foreground/40 group-hover:scale-125 group-hover:bg-foreground'
                  }`}
                />

                {/* Always-visible label (lg and up) */}
                <span
                  className={`absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] transition-colors duration-300 lg:inline-flex ${
                    isActive
                      ? 'border-foreground/30 bg-foreground/10 text-foreground'
                      : 'border-border/40 bg-foreground/5 text-muted-foreground group-hover:border-border group-hover:bg-foreground/10 group-hover:text-foreground'
                  }`}
                >
                  {iconMap[section.id!]}
                  {section.aria}
                </span>

                {/* Hover-only label (below lg) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -6, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -6, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border/50 bg-foreground px-2.5 py-1 text-xs text-background shadow-lg lg:hidden"
                    >
                      {iconMap[section.id!]}
                      {section.aria}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
