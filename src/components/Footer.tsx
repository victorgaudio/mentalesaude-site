'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Obrigado por se inscrever em nossa newsletter!');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logomes.png"
                alt="Mental&Saúde"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Pioneira em saúde mental para crianças e adolescentes, transformando vidas através da tecnologia e da ciência.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-instagram-line ri-lg"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-facebook-circle-line ri-lg"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-linkedin-box-line ri-lg"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-youtube-line ri-lg"></i>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#quem-somos" className="text-gray-400 hover:text-white transition">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#solucao" className="text-gray-400 hover:text-white transition">
                  Solução
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-gray-400 hover:text-white transition">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Estudos de Caso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Materiais Educativos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Receba novidades e conteúdos exclusivos sobre saúde mental infantojuvenil.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="px-4 py-2 w-full bg-gray-700 border-none rounded-l focus:outline-none focus:ring-2 focus:ring-primary text-white text-sm"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-button whitespace-nowrap hover:bg-opacity-90 transition"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Mental&Saúde. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 