'use client';

import Tooltip from '@/components/Tooltip';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FiGithub, FiHome, FiLinkedin, FiUser, FiTerminal, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';
import { LiaHackerrank } from 'react-icons/lia';
import { SiLeetcode } from 'react-icons/si';
import portfolioData from '@/data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  home: <FiHome className="size-4" />,
  about: <FiUser className="size-4" />,
  skills: <FiTerminal className="size-4" />,
  experience: <FiBriefcase className="size-4" />,
  projects: <FiFolder className="size-4" />,
  contact: <FiMail className="size-4" />,
  blogs: <BsFillJournalBookmarkFill className="size-4" />,
  github: <FiGithub className="size-4" />,
  linkedin: <FiLinkedin className="size-4" />,
  hackerrank: <LiaHackerrank className="size-5" />,
  leetcode: <SiLeetcode className="size-4" />,
};

export default function NavItems() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = portfolioData.navItems.map((item) => ({
    ...item,
    icon: item.id ? iconMap[item.id] : null,
  }));

  const navWidth = isHovered ? 520 : 450;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 ">
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 p-2 rounded-full z-50 pointer-events-auto flex min-h-full h-full items-center px-1 border border-[var(--border)] glass shadow-lg transform-gpu"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ width: navWidth + 48 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <div className="flex w-full h-full items-center gap-1">
          {navItems.map((item, idx) => {
            if (item.type === 'divider') {
              return (
                <div
                  key={idx}
                  data-orientation="vertical"
                  role="none"
                  className={`shrink-0 bg-muted-foreground w-[1px] h-full${
                    idx === navItems.length - 2 ? ' py-2' : ''
                  }`}
                />
              );
            }

            return (
              <motion.div
                key={idx}
                className="flex-1 flex aspect-square cursor-pointer items-center justify-center rounded-full min-w-0 transition-all duration-200 hover:bg-accent/20 hover:shadow-lg hover:scale-110"
                onHoverStart={() => setHoveredItem(idx)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Tooltip
                  content={item.tooltip || item.aria || ''}
                  isVisible={hoveredItem === idx}
                >
                  {item.isInternal && item.href ? (
                    <Link
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-foreground rounded-full size-12 w-full h-full"
                      aria-label={item.aria}
                      href={item.href}
                    >
                      {item.icon}
                    </Link>
                  ) : item.href ? (
                    <a
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-foreground rounded-full size-12 w-full h-full"
                      aria-label={item.aria}
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {item.icon}
                    </a>
                  ) : null}
                </Tooltip>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
    </div>
  );
}
