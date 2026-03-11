"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pb-20 lg:pb-32 overflow-hidden">
      {/* Header Spacer */}
      <div className="h-24 lg:h-32"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge badge-accent mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient leading-[1.1]"
          >
            Gabriel Jacob. <br />
            Full Stack Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-muted mb-12 leading-relaxed"
          >
            I build backend systems that scale and frontends that people love. Currently at <span className="text-foreground font-bold">Interra Networks</span> and building <span className="text-foreground font-bold">MyExcelTools</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-10"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:softmaktech@gmail.com"
                className="btn-primary flex items-center gap-2 group"
              >
                <Mail size={18} />
                Let&apos;s talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/codeshoel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
            <p className="text-xs text-text-muted/60 italic px-1">
              Note: You might see me as <span className="text-accent/60 font-bold">Binary</span> on WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
