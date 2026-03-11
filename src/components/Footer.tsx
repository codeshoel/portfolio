"use client";

import React from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border-main py-12 bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight">Gabriel Jacob</h3>
            <p className="text-sm text-text-muted">Full Stack Developer & Cyber Security Enthusiast</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 mt-8 md:mt-0">
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a 
                  href="https://wa.me/2347033109715" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a 
                  href="mailto:softmaktech@gmail.com" 
                  className="btn-secondary px-4 py-2"
                  aria-label="Email"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
                <a 
                  href="https://github.com/codeshoel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
              <p className="text-[10px] text-text-muted/50 italic">
                Alias on WA: <span className="font-bold">Binary</span>
              </p>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border-main flex justify-between items-center">
          <p className="text-xs text-text-muted">
            © {currentYear} Gabriel Jacob. Built with Next.js & Tailwind.
          </p>
          <div className="hidden sm:flex gap-6">
            <a href="#about" className="text-xs font-semibold text-text-muted hover:text-foreground">About</a>
            <a href="#projects" className="text-xs font-semibold text-text-muted hover:text-foreground">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
