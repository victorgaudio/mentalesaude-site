'use client';

import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
    newsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Obrigado pelo seu contato! Retornaremos em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      institution: '',
      message: '',
      newsletter: false,
    });
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'E-mail',
      content: 'contato@mentalesaude.com.br',
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefone',
      content: '(21) 99441-4873',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Endereço',
      content: 'Avenida Das Américas, 500 - Barra da Tijuca\nRio de Janeiro - Capital · Downtown\nCEP 22640-904',
    },
  ];

  const socialLinks = [
    { icon: 'ri-instagram-line', href: '#' },
    { icon: 'ri-facebook-circle-line', href: '#' },
    { icon: 'ri-linkedin-box-line', href: '#' },
    { icon: 'ri-youtube-line', href: '#' },
  ];

  return (
    <SectionWrapper id="contato" backgroundColor="gray">
      <div className="text-center mb-16">
        <h2 className="font-bree text-fluid-3xl md:text-fluid-4xl font-bold text-primary mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-fluid-base">
          Estamos prontos para ajudar sua escola ou família a promover a saúde mental 
          e o desenvolvimento integral de crianças e adolescentes.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-bree text-fluid-2xl font-semibold text-primary mb-6">
              Solicite um Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-gray-700 mb-2 font-medium">
                  Instituição
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nome da escola ou instituição"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="newsletter" className="text-gray-700 text-sm">
                  Concordo em receber informações sobre a Mental&Saúde
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 font-medium rounded-button hover:bg-primary/90 transition-colors"
              >
                Solicite um orçamento agora!
              </button>
            </form>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="font-bree text-fluid-2xl font-semibold text-primary mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0">
                    <i className={`${info.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{info.title}</h4>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-bree text-fluid-2xl font-semibold text-primary mb-6">
              Siga-nos
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <i className={`${link.icon} text-primary ri-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 