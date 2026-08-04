'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiAward,
  FiBriefcase,
  FiFolder,
  FiLayout,
  FiMail,
  FiTerminal,
  FiUser,
} from 'react-icons/fi';
import portfolioData from '@/data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  about: <FiUser className="size-4" />,
  skills: <FiTerminal className="size-4" />,
  experience: <FiBriefcase className="size-4" />,
  achievements: <FiAward className="size-4" />,
  projects: <FiFolder className="size-4" />,
  contact: <FiMail className="size-4" />,
};

const sectionItems = portfolioData.navItems.filter(
  (item) =>
    item.type === 'link' && item.isInternal && item.id && item.id !== 'home',
);

export default function MobileSectionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(sectionItems[0]?.id ?? '');

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

    for (const section of sectionItems) {
      const el = document.getElementById(section.id!);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.assign(`/#${id}`);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="absolute bottom-14 right-0 w-44 overflow-hidden rounded-2xl border border-border bg-background/90 shadow-2xl backdrop-blur-lg"
          >
            <p className="px-4 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              Jump to
            </p>
            {sectionItems.map((section, i) => {
              const isActive = section.id === activeId;
              return (
                <motion.button
                  key={section.id}
                  type="button"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                  onClick={() => handleClick(section.id!)}
                  className={`flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-muted-foreground active:bg-foreground/5'
                  }`}
                >
                  {iconMap[section.id!]}
                  {section.aria}
                  {isActive && (
                    <span className="ml-auto size-1.5 rounded-full bg-foreground" />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close section menu' : 'Open section menu'}
        className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-lg transition-colors"
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          <FiLayout className="size-5 text-foreground" />
        </motion.span>
      </motion.button>
    </div>
  );
}
