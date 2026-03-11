"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Biography</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-8 space-y-6 text-lg text-text-muted leading-relaxed"
        >
          <p>
            I&apos;m a full stack developer who cares about building things that actually work. Over the past few years, I&apos;ve moved from backend development into full stack, working with everything from APIs to deployment.
          </p>
          <p>
            Currently at <span className="text-foreground font-semibold">Interra Networks</span>, I build and maintain backend systems that power critical applications. Parallel to my professional role, I&apos;ve built <span className="text-foreground font-semibold">MyExcelTools</span>, a SaaS platform from scratch that automates repetitive spreadsheet work using AI.
          </p>
          <p>
            I started with a diploma in Backend Development from <span className="text-foreground font-semibold">ALX</span>, picked up cybersecurity at Miva Open University, and recently got into machine learning. I enjoy configuring servers as much as writing code—I like understanding how things work under the hood.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
