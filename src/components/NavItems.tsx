'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiGithub, FiHome, FiLinkedin } from 'react-icons/fi';
import { LiaHackerrank } from 'react-icons/lia';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

export default function NavItems() {
  const [isHovered, setIsHovered] = useState(false);

  // List of nav items for easier mapping
  const navItems = [
    {
      type: 'link',
      href: '/',
      aria: 'Home',
      icon: <FiHome className="size-4" />, // Home
      isInternal: true,
    },
    { type: 'divider' },
    {
      type: 'link',
      href: 'https://github.com/rsinghcodes',
      aria: 'GitHub',
      icon: <FiGithub className="size-4" />, // GitHub
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://www.linkedin.com/in/raghvendrrsingh',
      aria: 'LinkedIn',
      icon: <FiLinkedin className="size-4" />, // LinkedIn
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://www.hackerrank.com/profile/rsinghcodes',
      aria: 'Hackerrank',
      icon: <LiaHackerrank className="size-5" />, // Hackerrank
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://leetcode.com/u/rsinghcodes/',
      aria: 'Leetcode',
      icon: <SiLeetcode className="size-4" />, // Leetcode
      isInternal: false,
    },
    {
      type: 'link',
      href: 'https://x.com/raghvendrrsingh',
      aria: 'X',
      icon: <RiTwitterXFill className="size-4" />, // X
      isInternal: false,
    },
  ];

  const navWidth = isHovered ? 300 : 250;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 ">
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 p-2 rounded-full z-50 pointer-events-auto flex min-h-full h-full items-center px-1 border border-[var(--border)] bg-[rgba(10,25,47,0.55)] backdrop-blur-xl [box-shadow:0_8px_32px_0_rgba(31,38,135,0.15)] transform-gpu"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ width: navWidth }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex w-full h-full items-center gap-1">
          {navItems.map((item, idx) => {
            if (item.type === 'divider') {
              return (
                <div
                  key={idx}
                  data-orientation="vertical"
                  role="none"
                  className={`shrink-0 bg-border w-[1px] h-full${
                    idx === navItems.length - 2 ? ' py-2' : ''
                  }`}
                />
              );
            }

            // Link icons
            return (
              <motion.div
                key={idx}
                className="flex-1 flex aspect-square cursor-pointer items-center justify-center rounded-full min-w-0"
              >
                {item.isInternal && item.href ? (
                  <Link
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12 w-full h-full"
                    aria-label={item.aria}
                    href={item.href}
                  >
                    {item.icon}
                  </Link>
                ) : item.href ? (
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12 w-full h-full"
                    aria-label={item.aria}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {item.icon}
                  </a>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
