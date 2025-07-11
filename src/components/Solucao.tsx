'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function Solucao() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animate solution features
        gsap.fromTo(
          '.solution-feature',
          { 
            x: -50, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.solution-features',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate platform image
        gsap.fromTo(
          '.platform-image',
          { 
            scale: 0.8, 
            opacity: 0 
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.platform-image',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate process steps
        gsap.fromTo(
          '.process-step',
          { 
            y: 30, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.process-steps',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const features = [
    'Interface amigável e acessível para educadores, pais e profissionais de saúde',
    'Testes psicológicos validados cientificamente e adaptados para o formato digital',
    'Análise detalhada de perfil comportamental e emocional',
    'Relatórios visuais e de fácil compreensão',
    'Recomendações personalizadas baseadas em evidências científicas',
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Avaliação',
      description: 'Aplicação de testes psicológicos validados através da plataforma digital.',
    },
    {
      number: '2',
      title: 'Análise',
      description: 'Processamento dos dados e geração de relatórios detalhados e visuais.',
    },
    {
      number: '3',
      title: 'Recomendação',
      description: 'Sugestões personalizadas de intervenções e acompanhamento contínuo.',
    },
  ];

  return (
    <SectionWrapper 
      ref={sectionRef}
      id="solucao"
      backgroundColor="gray"
    >
      <div className="text-center mb-16">
        <h2 className="font-bree text-fluid-3xl md:text-fluid-4xl font-bold text-primary mb-4">
          Nossa Solução
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-fluid-base">
          Uma plataforma digital inovadora que integra avaliações psicológicas validadas 
          com tecnologia intuitiva para identificar e acompanhar a saúde mental de crianças e adolescentes.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 solution-features">
          <h3 className="font-bree text-fluid-2xl font-semibold text-primary mb-6">
            Plataforma Intuitiva
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="solution-feature flex items-start">
                <div className="w-6 h-6 flex items-center justify-center bg-primary/10 rounded-full mr-3 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-primary text-sm"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-1/2">
          <div className="platform-image relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/platform-interface.jpg"
                alt="Plataforma Mental&Saúde"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="font-bree text-fluid-2xl font-semibold text-primary mb-6 text-center">
          Como Funciona
        </h3>
        <div className="process-steps grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step text-center p-4">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h4 className="font-bree font-semibold text-primary mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 