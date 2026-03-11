"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Education & Certs</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-8 space-y-10"
        >
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-surface border border-border-main rounded-xl text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">B.Sc. Cyber Security (In Progress)</h3>
                <p className="text-text-muted font-medium">Miva Open University | 2023 – Present</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-3 bg-surface border border-border-main rounded-xl text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Diploma in Backend Development</h3>
                <p className="text-text-muted font-medium">ALX | 2021 – 2022</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-3 bg-surface border border-border-main rounded-xl text-accent">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Machine Learning Certified</h3>
                <p className="text-text-muted font-medium">Udemy | 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
