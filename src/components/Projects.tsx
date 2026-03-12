"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Server, Smartphone, Globe, ShieldCheck, Send } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MyExcelTools",
      subtitle: "AI & Utility SaaS for Spreadsheets",
      stack: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery", "OpenAI", "LemonSqueezy"],
      description: "A complete SaaS platform built from scratch that helps people automate repetitive spreadsheet work. Offers AI-powered tools for data cleaning and formula generation.",
      type: "Full Stack / SaaS",
      icon: Globe,
      link: "https://myexceltools.app"
    },
    {
      title: "AHS",
      subtitle: "Advance Home Care Solutions",
      stack: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery", "Cloudinary", "VAPI", "Twilio", "Ad APIs"],
      description: "Full stack lead generation platform with automated AI call agents, SMS workflows, and complex tracking integrations for Facebook, Instagram, and LinkedIn Ads.",
      type: "Complex Automation",
      icon: Smartphone,
      link: "https://advancehomecaresolutions.com"
    },
    {
      title: "CIMAS",
      subtitle: "National Visa CRM Platform",
      stack: ["PHP", "Smarty Template", "SuiteCRM"],
      description: "A high-impact CRM system managing the national vetting and approval process for passport, landing card, and gratis applications with customized workflows.",
      type: "GovTech / CRM",
      icon: ShieldCheck,
      linkText: "On Demand"
    },
    {
      title: "SMS Hub",
      subtitle: "Messaging Platform API",
      stack: ["Node.js", "Express", "PostgreSQL", "Slengshort"],
      description: "Backend API for an SMS messaging platform. Integrated Twilio to handle high-volume message sending and real-time delivery tracking for business alerts.",
      type: "Backend API",
      icon: Send
    },
    {
      title: "Invas",
      subtitle: "Backend API development",
      stack: ["Node.js", "Express", "PostgreSQL"],
      description: "Collaborative project at Interra Networks. Implemented production-grade endpoints and documentation for an internal application.",
      type: "Backend API",
      icon: Server,
      link: "https://www.invas.ng"
    },
    {
      title: "NIGSIMS",
      subtitle: "Data Processing API",
      stack: ["Node.js", "Express", "PostgreSQL"],
      description: "Developed a robust backend API handling high-traffic data processing and complex database interactions with optimized queries.",
      type: "Backend API",
      icon: Code,
      link: "https://nigsims.ng"
    },
    {
      title: "Vision Multilink",
      subtitle: "Equipment & Logistics Portfolio",
      stack: ["Next.js", "Tailwind CSS"],
      description: "A professional portfolio website for a construction equipment partnership and logistics company, focused on clarity and brand representation.",
      type: "Frontend / Business",
      icon: Globe,
      link: "https://vgimultilinksltd.com"
    }
  ];

  return (
    <section id="projects" className="container section-padding border-t border-border-main">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical Case Studies</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
          <p className="text-lg text-text-muted leading-relaxed">
            A selection of complex systems I&apos;ve architected, from national-scale CRM platforms to AI-integrated SaaS solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="card group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accent/5 text-accent rounded-xl group-hover:bg-accent group-hover:text-background transition-colors">
                <project.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="flex gap-4 items-center">
                <Github size={20} className="text-text-muted hover:text-foreground cursor-pointer transition-colors" />
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group/link">
                    <ExternalLink size={20} className="text-text-muted hover:text-foreground cursor-pointer transition-colors" />
                  </a>
                ) : project.linkText ? (
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-text-muted/50 border border-border-main px-1.5 py-0.5 rounded">
                    {project.linkText}
                  </span>
                ) : (
                  <ExternalLink size={20} className="text-text-muted/30 cursor-not-allowed" />
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80">{project.type}</span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mt-1">{project.title}</h3>
                <p className="text-xs font-medium text-text-muted/70">{project.subtitle}</p>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="badge badge-outline text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
