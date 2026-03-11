"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2.5 rounded-xl border border-border-main bg-surface w-[42px] h-[42px]"></div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-border-main bg-surface text-foreground hover:border-accent hover:text-accent transition-all flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
