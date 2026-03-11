"use client";

import React, { useEffect, useRef } from 'react';

const RAINBOW_COLORS = [
  '#ff0000', '#ff00ff', '#0000ff', '#00ffff', '#00ff00', '#ffff00', '#ff7f00'
];

interface Point {
  x: number;
  y: number;
}

// Shape Generators
const getShapePoints = (rect: DOMRect, side: 'L' | 'R', count: number, sectionId: string) => {
  const points: Point[] = [];
  const padding = 50;
  const xBase = side === 'L' ? rect.left - padding : rect.right + padding;
  const direction = side === 'L' ? -1 : 1;
  const h = rect.height;
  const top = rect.top;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y = top + t * h;
    let x = xBase;

    switch (sectionId) {
      case 'hero': // Angle Brackets < >
        const angleDist = Math.abs(t - 0.5) * 2;
        x = xBase + (1 - angleDist) * 40 * direction;
        break;

      case 'skills': // Square Brackets [ ]
        if (t < 0.05 || t > 0.95) {
          x = xBase + 30 * direction;
        } else {
          x = xBase;
        }
        break;

      case 'projects': // Curly Brackets { }
        const curlyCurve = Math.abs(Math.cos(t * Math.PI * 2));
        x = xBase + (curlyCurve * 40 * direction);
        break;

      case 'about': // Comment style /* */
        if (side === 'L') { // /
          x = xBase + (0.5 - t) * 40;
        } else { // * (simplified to a wavy line or similar)
          x = xBase + Math.sin(t * 10) * 10;
        }
        break;

      case 'experience':
      case 'education': // Parentheses ( )
        const parenCurve = Math.sin(t * Math.PI);
        x = xBase + parenCurve * 30 * direction;
        break;

      default: // Default to Curly { }
        const defCurve = Math.abs(Math.cos(t * Math.PI * 2));
        x = xBase + (defCurve * 40 * direction);
    }

    points.push({ x, y });
  }
  return points;
};

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  ease: number;
  active: boolean;
  isShapeParticle: boolean;

  constructor(x: number, y: number, color: string, isShapeParticle: boolean) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = isShapeParticle ? 2 + Math.random() * 1.5 : 1 + Math.random() * 2;
    this.vx = 0;
    this.vy = 1 + Math.random() * 1.5;
    this.ease = 0.08 + Math.random() * 0.1;
    this.active = false;
    this.isShapeParticle = isShapeParticle;
  }

  update(mouse: { x: number | null, y: number | null }, canvasWidth: number, canvasHeight: number, target?: Point) {
    if (this.isShapeParticle && target) {
      this.active = true;
      this.x += (target.x - this.x) * this.ease;
      this.y += (target.y - this.y) * this.ease;
      
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x += (Math.random() - 0.5) * force * 2;
          this.y += (Math.random() - 0.5) * force * 2;
        }
      }
    } else {
      this.active = false;
      this.y += this.vy;
      this.x += Math.sin(this.y / 100) * 0.5;

      if (this.y > canvasHeight) {
        this.y = -20;
        this.x = Math.random() * canvasWidth;
      }

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= (dx/dist) * force * 4;
          this.y -= (dy/dist) * force * 4;
        }
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    if (this.active) {
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
    } else {
      ctx.shadowBlur = 0;
    }
  }
}

const RainbowSnow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });
  const shapePoints = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const findActiveSection = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      let bestSection: { rect: DOMRect, id: string } | null = null;

      if (mouse.current.y !== null) {
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (mouse.current.y >= rect.top && mouse.current.y <= rect.bottom) {
            const container = section.querySelector('.container');
            bestSection = {
              rect: container ? container.getBoundingClientRect() : rect,
              id: section.id || 'default'
            };
            break;
          }
        }
      }
      
      if (bestSection) {
        const count = 240; 
        const left = getShapePoints(bestSection.rect, 'L', count / 2, bestSection.id);
        const right = getShapePoints(bestSection.rect, 'R', count / 2, bestSection.id);
        shapePoints.current = [...left, ...right];
      } else {
        shapePoints.current = [];
      }
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = [];
      const totalCount = 600;
      for (let i = 0; i < totalCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const isShapeParticle = i < 240; 
        particles.current.push(new Particle(x, y, RAINBOW_COLORS[i % RAINBOW_COLORS.length], isShapeParticle));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      findActiveSection();

      particles.current.forEach((p, i) => {
        const target = (p.isShapeParticle && i < shapePoints.current.length) ? shapePoints.current[i] : undefined;
        p.update(mouse.current, canvas.width, canvas.height, target);
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', findActiveSection);
    window.addEventListener('mouseleave', () => { mouse.current.x = null; });

    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', findActiveSection);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-10] opacity-40" />;
};

export default RainbowSnow;
