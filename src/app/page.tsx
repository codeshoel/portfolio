"use client";

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

import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <RainbowSnow />
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

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
