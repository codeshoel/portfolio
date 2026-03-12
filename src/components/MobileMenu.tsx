"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Heart, LayoutDashboard, Mail } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', icon: Home, href: '#' },
    { id: 'about', icon: User, href: '#about' },
    { id: 'projects', icon: Heart, href: '#projects' }, // Using heart for projects as per reference image style
    { id: 'skills', icon: LayoutDashboard, href: '#skills' },
    { id: 'contact', icon: Mail, href: 'mailto:softmaktech@gmail.com' },
  ];

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-8 left-0 right-0 flex justify-center z-[60] pointer-events-none px-6 sm:hidden"
        >
          <div className="h-[60px] bg-[#EEF1F6] dark:bg-[#2A3552]/95 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 px-4 flex items-center justify-around gap-2 w-full max-w-[340px] pointer-events-auto">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                  }}
                  className="relative flex items-center justify-center w-12 h-12"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCircle"
                      className="absolute inset-0 bg-[#1B2335] dark:bg-accent rounded-full"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon
                    size={22}
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#1B2335] dark:text-slate-400'
                    }`}
                    strokeWidth={1.5}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
