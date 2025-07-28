'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-glass backdrop-blur-md border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {theme === 'light' ? (
          <FiMoon className="w-5 h-5 text-foreground" />
        ) : (
          <FiSun className="w-5 h-5 text-foreground" />
        )}
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
