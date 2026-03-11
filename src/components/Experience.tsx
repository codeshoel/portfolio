"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-8 space-y-12"
        >
          <div className="space-y-4 relative pl-8 border-l-2 border-border-main">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0 border-4 border-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-2xl font-bold text-foreground">Full Stack Developer</h3>
              <span className="text-sm font-bold text-accent px-2 py-1 bg-accent/10 rounded uppercase tracking-wider">2023 – Present</span>
            </div>
            <p className="text-lg font-semibold text-text-muted">Interra Networks Limited</p>
            <ul className="space-y-3 pt-4 text-text-muted px-10 list-disc ml-4 leading-relaxed">
              <li>Build and maintain backend APIs that power internal and client-facing applications.</li>
              <li>Collaborate with team members to develop new features and improve existing systems.</li>
              <li>Work across the stack when needed, from database design to frontend integration.</li>
              <li>Ensure applications are deployed securely and perform well under load.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
