"use client";

import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Github } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-main">
      <div className="container flex justify-between items-center h-16">
        <a href="#" className="font-bold text-xl tracking-tight hover:text-accent transition-colors">
          GJ<span className="text-accent"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#about" className="text-sm font-semibold text-text-muted hover:text-foreground">About</a>
          <a href="#skills" className="text-sm font-semibold text-text-muted hover:text-foreground">Skills</a>
          <a href="#projects" className="text-sm font-semibold text-text-muted hover:text-foreground">Projects</a>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com/codeshoel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          <a
            href="mailto:softmaktech@gmail.com"
            className="btn-primary text-sm"
          >
            Contact
          </a>
        </div>

        <div className="flex sm:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.2 p-2 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className={`h-0.5 bg-foreground transition-all duration-300 rounded-full ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <div className={`h-0.5 bg-accent transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : 'w-6'}`} />
            <div className={`h-0.5 bg-foreground transition-all duration-300 rounded-full ${isOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-4 ml-auto group-hover:w-6'}`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
