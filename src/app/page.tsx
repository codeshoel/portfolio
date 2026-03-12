import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Personal from '@/components/Personal';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import RainbowSnow from '@/components/RainbowSnow';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <RainbowSnow />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-main">
        <div className="container flex justify-between items-center h-16">
          <a href="#" className="font-bold text-xl tracking-tight hover:text-accent transition-colors">
            GJ<span className="text-accent"></span>
          </a>
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
        </div>
      </nav>

      <Hero />
      <div className="space-y-0">
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Personal />
      </div>
      <Footer />
    </main>
  );
}
