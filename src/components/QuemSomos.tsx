'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function QuemSomos() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animate cards on scroll
        gsap.fromTo(
          '.mission-card',
          { 
            y: 50, 
            opacity: 0,
            scale: 0.95 
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate team members
        gsap.fromTo(
          '.team-member',
          { 
            y: 30, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.team-section',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const teamMembers = [
    {
      name: 'Hevandro Campos',
      role: 'CEO',
      image: '/Hevandro-Campos-2.png',
    },
    {
      name: 'Ricardo Campos',
      role: 'CTO',
      image: '/Ricardo-Campos-2.png',
    },
    {
      name: 'Dra. Isabela Mendes',
      role: 'Psicóloga Clínica',
      image: '/isabela-mendes.jpg',
    },
    {
      name: 'Dr. Rafael Costa',
      role: 'Neurocientista',
      image: '/rafael-costa.jpg',
    },
    {
      name: 'Dra. Camila Oliveira',
      role: 'Psicopedagoga',
      image: '/camila-oliveira.jpg',
    },
    {
      name: 'André Martins',
      role: 'Especialista em Tecnologia',
      image: '/andre-martins.jpg',
    },
  ];

  return (
    <SectionWrapper 
      ref={sectionRef}
      id="quem-somos" 
      backgroundColor="secondary"
      className="relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="text-center mb-16">
        <h2 className="font-bree text-fluid-3xl md:text-fluid-4xl font-bold text-primary mb-4">
          Quem Somos
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-fluid-base">
          Uma equipe multidisciplinar dedicada a promover saúde mental e aprendizagem 
          através de soluções tecnológicas inovadoras.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="mission-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 flex items-center justify-center bg-olive/10 rounded-full mb-4">
            <i className="ri-heart-pulse-line ri-xl text-olive"></i>
          </div>
          <h3 className="font-bree text-xl font-semibold text-primary mb-3">Nossa Missão</h3>
          <p className="text-gray-600">
            Promover o bem-estar emocional e o desenvolvimento saudável de crianças e 
            adolescentes através de avaliações psicológicas acessíveis e precisas.
          </p>
        </div>
        
        <div className="mission-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 flex items-center justify-center bg-olive/10 rounded-full mb-4">
            <i className="ri-eye-line ri-xl text-olive"></i>
          </div>
          <h3 className="font-bree text-xl font-semibold text-primary mb-3">Nossa Visão</h3>
          <p className="text-gray-600">
            Ser referência em soluções digitais para saúde mental infantojuvenil, 
            transformando a forma como escolas e famílias abordam o desenvolvimento emocional.
          </p>
        </div>
        
        <div className="mission-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 flex items-center justify-center bg-olive/10 rounded-full mb-4">
            <i className="ri-award-line ri-xl text-olive"></i>
          </div>
          <h3 className="font-bree text-xl font-semibold text-primary mb-3">Nossos Valores</h3>
          <p className="text-gray-600">
            Ética, inovação, empatia, rigor científico e compromisso com o desenvolvimento 
            integral das crianças e adolescentes.
          </p>
        </div>
      </div>
      
      <div className="team-section bg-white p-8 rounded-lg shadow-lg">
        <h3 className="font-bree text-2xl font-semibold text-primary mb-6 text-center">
          Nossa Equipe Multidisciplinar
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-sm">{member.name}</h4>
              <p className="text-xs text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 