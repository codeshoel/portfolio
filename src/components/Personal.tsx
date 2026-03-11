"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Personal = () => {
  return (
    <section id="personal" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Personal</h2>
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
            I&apos;m currently finishing up my degree in <span className="text-foreground font-semibold">Cyber Security</span> while working full time at Interra Networks, so I&apos;m used to juggling multiple things at once. I enjoy building tools that save people time, whether it&apos;s a small internal API or a full SaaS product.
          </p>
          <p>
            Outside of coding, I like learning about machine learning, keeping up with security trends, and figuring out how to deploy things better. I speak English fluently and I&apos;m always open to interesting conversations about tech, products, or anything in between.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Personal;
