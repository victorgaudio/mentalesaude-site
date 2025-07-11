# Mental&Saúde - Next.js Frontend

Este é o frontend moderno do site institucional da Mental&Saúde, reconstruído com Next.js 15, Tailwind CSS, GSAP e Framer Motion.

## 🚀 Tecnologias Utilizadas

### Core Framework
- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - JavaScript com tipagem estática

### Estilização
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Bree Serif e Poppins
- **Container Queries** - Responsividade avançada
- **Fluid Typography** - Tipografia responsiva

### Animações
- **GSAP** - Animações JavaScript de alta performance
- **ScrollTrigger** - Animações baseadas em scroll
- **Framer Motion** - Animações React declarativas

### Otimizações
- **Next.js Image** - Otimização automática de imagens
- **Server Components** - Renderização no servidor
- **Font Optimization** - Carregamento otimizado de fontes
- **SEO Optimized** - Meta tags e estrutura semântica

## 📁 Estrutura do Projeto

```
mentale-frontend/
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globais e Tailwind
│   │   ├── layout.tsx        # Layout principal
│   │   └── page.tsx          # Página home
│   └── components/
│       ├── ClientLayout.tsx  # Layout client-side com animações
│       ├── NavBar.tsx        # Cabeçalho com menu responsivo
│       ├── Footer.tsx        # Rodapé com links e newsletter
│       ├── SectionWrapper.tsx # Wrapper genérico para seções
│       ├── HeroSection.tsx   # Seção hero com parallax
│       ├── QuemSomos.tsx     # Seção sobre a empresa
│       ├── Problema.tsx      # Desafios enfrentados
│       ├── Solucao.tsx       # Nossa solução
│       └── Contato.tsx       # Formulário de contato
├── public/                   # Imagens e assets estáticos
├── tailwind.config.ts        # Configuração do Tailwind
└── next.config.ts           # Configuração do Next.js
```

## 🎨 Design System

### Cores
- **Primary**: `#2c4156` - Azul escuro elegante
- **Secondary**: `#a7cbbf` - Verde suave
- **Olive**: `#9eb458` - Verde oliva
- **Pastel**: `#f2e581` - Amarelo pastel
- **Beige**: `#efede3` - Fundo bege

### Tipografia
- **Títulos**: Bree Serif - Fonte serifada moderna
- **Texto**: Poppins - Fonte sans-serif limpa
- **Tamanhos**: Sistema fluído com `clamp()` para responsividade

### Animações
- **Entrada**: Fade in com movimento Y
- **Scroll**: Parallax e reveal progressivo
- **Hover**: Transformações suaves e mudanças de cor
- **Transições**: Curvas de easing personalizadas

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Linting
npm run lint
```

## 📱 Funcionalidades Implementadas

### Navegação
- [x] Header fixo com backdrop blur
- [x] Menu mobile responsivo
- [x] Scroll suave para âncoras
- [x] Estados de hover e focus

### Seções
- [x] Hero com parallax e animações GSAP
- [x] Quem Somos com missão, visão e equipe
- [x] Problemas com cards animados
- [x] Solução com features e processo
- [x] Contato com formulário funcional

### Animações
- [x] Parallax scrolling no hero
- [x] Reveal animado de elementos
- [x] Transições entre páginas
- [x] Micro-interações em hover

### Responsividade
- [x] Mobile-first approach
- [x] Container queries
- [x] Tipografia fluida
- [x] Imagens otimizadas

### Acessibilidade
- [x] Estrutura semântica
- [x] Navegação por teclado
- [x] Contraste adequado
- [x] Prefers-reduced-motion

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente
Crie um arquivo `.env.local` para configurações locais:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contato@mentalesaude.com.br
```

### Extensões VSCode Recomendadas
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter

## 📊 Performance

### Otimizações Implementadas
- Server Components por padrão
- Lazy loading de imagens
- Preload de recursos críticos
- Compressão automática de assets
- Bundle splitting automático

### Métricas Esperadas
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FID**: < 100ms

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Build automático via GitHub
git push origin main
```

### Build Manual
```bash
npm run build
npm run start
```

## 🔄 Migração do HTML Original

### Estrutura Migrada
- [x] Header → NavBar component
- [x] Hero → HeroSection component
- [x] Quem Somos → QuemSomos component
- [x] Problema → Problema component
- [x] Solução → Solucao component
- [x] Contato → Contato component
- [x] Footer → Footer component

### Melhorias Implementadas
- Componentização React
- Animações GSAP avançadas
- Tipografia responsiva
- Performance otimizada
- SEO melhorado
- Acessibilidade aprimorada

## 📞 Suporte

Para dúvidas ou sugestões sobre o desenvolvimento:
- Email: contato@mentalesaude.com.br
- Telefone: (21) 99441-4873

---

**Mental&Saúde** - Transformando vidas através da tecnologia e ciência 🧠💚
