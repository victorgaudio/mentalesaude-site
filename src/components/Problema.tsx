'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

export default function Problema() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animate challenge cards
        gsap.fromTo(
          '.challenge-card',
          { 
            y: 60, 
            opacity: 0,
            scale: 0.9 
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const challenges = [
    {
      title: 'TDAH',
      icon: 'ri-focus-3-line',
      color: 'yellow',
      description: 'Dificuldades de concentração e hiperatividade que impactam o aprendizado e as relações sociais.',
    },
    {
      title: 'Ansiedade',
      icon: 'ri-mental-health-line',
      color: 'blue',
      description: 'Preocupações excessivas e medos que interferem na participação escolar e no desenvolvimento social.',
    },
    {
      title: 'Estresse',
      icon: 'ri-emotion-unhappy-line',
      color: 'red',
      description: 'Pressões acadêmicas e sociais que causam sobrecarga emocional e problemas de comportamento.',
    },
    {
      title: 'Depressão',
      icon: 'ri-emotion-sad-line',
      color: 'purple',
      description: 'Tristeza persistente e perda de interesse que afetam o desempenho escolar e o bem-estar geral.',
    },
  ];

  return (
    <SectionWrapper 
      ref={sectionRef}
      backgroundColor="beige"
      className="relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-olive/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="text-center mb-16">
        <h2 className="font-bree text-fluid-3xl md:text-fluid-4xl font-bold text-primary mb-4">
          Desafios que Enfrentamos
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-fluid-base">
          Muitas crianças e adolescentes enfrentam desafios emocionais e comportamentais 
          que afetam seu desempenho escolar e bem-estar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            className="challenge-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-16 h-16 flex items-center justify-center bg-${challenge.color}-100 rounded-full mb-4`}>
              <i className={`${challenge.icon} ri-xl text-${challenge.color}-500`}></i>
            </div>
            <h3 className="font-bree text-xl font-semibold text-primary mb-3">
              {challenge.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-fluid-base">
          Estes desafios muitas vezes passam despercebidos ou são diagnosticados tardiamente, 
          impactando negativamente o desenvolvimento e o futuro das crianças e adolescentes.
        </p>
        <Link 
          href="#solucao" 
          className="text-primary font-medium inline-flex items-center hover:text-olive transition-colors"
        >
          Conheça nossa solução
          <i className="ri-arrow-right-line ri-lg ml-1"></i>
        </Link>
      </div>
    </SectionWrapper>
  );
} 