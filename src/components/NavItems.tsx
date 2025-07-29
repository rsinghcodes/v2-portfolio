'use client';

import Tooltip from '@/components/Tooltip';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiBriefcase, FiGithub, FiHome, FiLinkedin } from 'react-icons/fi';
import { LiaHackerrank } from 'react-icons/lia';
import { SiLeetcode } from 'react-icons/si';

export default function NavItems() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = [
    {
      type: 'link',
      href: '/',
      aria: 'Home',
      tooltip: 'Home',
      icon: <FiHome className="size-4" />, // Home
      isInternal: true,
    },
    {
      type: 'link',
      href: '/projects',
      aria: 'Projects',
      tooltip: 'Projects',
      icon: <FiBriefcase className="size-4" />, // Projects
      isInternal: true,
    },
    { type: 'divider' },
    {
      type: 'link',
      href: 'https://github.com/rsinghcodes',
      aria: 'GitHub',
      tooltip: 'GitHub',
      icon: <FiGithub className="size-4" />, // GitHub
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://www.linkedin.com/in/raghvendrrsingh',
      aria: 'LinkedIn',
      tooltip: 'LinkedIn',
      icon: <FiLinkedin className="size-4" />, // LinkedIn
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://www.hackerrank.com/profile/rsinghcodes',
      aria: 'Hackerrank',
      tooltip: 'HackerRank',
      icon: <LiaHackerrank className="size-5" />, // Hackerrank
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://leetcode.com/u/rsinghcodes/',
      aria: 'Leetcode',
      tooltip: 'LeetCode',
      icon: <SiLeetcode className="size-4" />, // Leetcode
      isInternal: false,
    },
  ];

  const navWidth = isHovered ? 300 : 250;

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
