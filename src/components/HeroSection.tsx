'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Hero entrance animation
        const tl = gsap.timeline();
        
        tl.fromTo(
          headlineRef.current,
          { 
            yPercent: 50, 
            opacity: 0,
            rotationX: 15 
          },
          { 
            yPercent: 0, 
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: 'power3.out'
          }
        )
        .fromTo(
          subtitleRef.current,
          { 
            yPercent: 30, 
            opacity: 0 
          },
          { 
            yPercent: 0, 
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { 
            yPercent: 20, 
            opacity: 0 
          },
          { 
            yPercent: 0, 
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
          },
          '-=0.3'
        );

        // Parallax effect on scroll
        if (heroRef.current) {
          gsap.to(bgRef.current, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });

          gsap.to(headlineRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(44,65,86,0.95) 50%, rgba(44,65,86,0.8) 100%), url("/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1
            ref={headlineRef}
            className="font-bree text-fluid-3xl md:text-fluid-5xl font-bold text-white mb-6 leading-tight"
          >
            Transformando a saúde mental de crianças e adolescentes
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-fluid-lg md:text-fluid-xl text-white/90 mb-8 leading-relaxed"
          >
            Avaliações psicológicas digitais inovadoras para escolas e famílias, 
            promovendo bem-estar e melhor desempenho escolar.
          </p>
          
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contato"
              className="bg-pastel text-primary px-8 py-3 font-medium rounded-button text-center whitespace-nowrap hover:bg-olive hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Solicite seu Orçamento
            </Link>
            <Link
              href="#solucao"
              className="border-2 border-pastel text-white px-8 py-3 font-medium rounded-button text-center whitespace-nowrap hover:bg-pastel hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Conheça nossa Solução
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pastel/10 rounded-full blur-3xl" />
    </section>
  );
} 