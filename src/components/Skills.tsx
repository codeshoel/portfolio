"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["FastAPI", "Node.js", "PHP", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "DevOps & Tools",
      skills: ["VPS Configuration", "Deployment", "Git", "Meta API", "Twilio API", "VAPI AI"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "Python"]
    }
  ];

  return (
    <section id="skills" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical Stack</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
          <p className="text-lg text-text-muted leading-relaxed">
            I specialize in building robust backend systems and modern full-stack applications.
          </p>
        </div>
        
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="badge badge-outline hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
