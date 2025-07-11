'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="mx-auto px-1 md:px-4 py-3 flex items-center justify-between container" style={{ overflow: 'visible' }}>
        <div className="flex items-center ml-12 md:ml-8 logo-container">
          <Link href="/" className="flex items-center">
            <Image
              src="/logomes.png"
              alt="Mental&Saúde"
              width={100}
              height={80}
              className="h-20 w-auto transition-transform"
              style={{ transform: 'scale(2)' }}
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#quem-somos" className="text-primary hover:text-olive font-medium transition-colors">
            Quem Somos
          </Link>
          <Link href="#solucao" className="text-primary hover:text-olive font-medium transition-colors">
            Solução
          </Link>
          <Link href="#beneficios" className="text-primary hover:text-olive font-medium transition-colors">
            Benefícios
          </Link>
          <Link href="#contato" className="text-primary hover:text-olive font-medium transition-colors">
            Contato
          </Link>
        </nav>
        
        <div>
          <Link 
            href="#contato" 
            className="hidden md:inline-block bg-pastel text-primary px-6 py-2 font-medium rounded-button whitespace-nowrap hover:bg-olive hover:text-white transition-all"
          >
            Solicite Orçamento
          </Link>
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="ri-menu-line ri-lg"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <Link href="#quem-somos" className="text-gray-700 py-2 border-b border-gray-100" onClick={closeMobileMenu}>
            Quem Somos
          </Link>
          <Link href="#solucao" className="text-gray-700 py-2 border-b border-gray-100" onClick={closeMobileMenu}>
            Solução
          </Link>
          <Link href="#beneficios" className="text-gray-700 py-2 border-b border-gray-100" onClick={closeMobileMenu}>
            Benefícios
          </Link>
          <Link href="#contato" className="text-gray-700 py-2 border-b border-gray-100" onClick={closeMobileMenu}>
            Contato
          </Link>
          <Link 
            href="#contato" 
            className="bg-pastel text-primary px-6 py-2 text-center font-medium rounded-button whitespace-nowrap hover:bg-olive hover:text-white transition-all"
            onClick={closeMobileMenu}
          >
            Solicite Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
} 