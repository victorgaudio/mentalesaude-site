# Mental&Saúde - Site Institucional

Este repositório contém o código-fonte do site institucional da Mental&Saúde, uma solução inovadora para avaliação e promoção da saúde mental de crianças e adolescentes.

## Sobre o Projeto
O site apresenta a missão, equipe, diferenciais, benefícios e formas de contato da Mental&Saúde, além de permitir que escolas e famílias solicitem orçamentos e conheçam mais sobre a plataforma.

### Principais Funcionalidades
- Apresentação institucional com identidade visual moderna
- Hero section com call-to-actions prominentes
- Seção "Quem Somos" com missão, visão, valores e equipe
- Apresentação de desafios enfrentados (TDAH, ansiedade, estresse, depressão)
- Solução completa da plataforma com benefícios
- Seção de diferenciais e validação científica
- Métricas de impacto e depoimentos
- Formulário de contato para orçamento
- Design responsivo com animações e efeitos visuais
- Layout otimizado para mobile e desktop

### Identidade Visual
- **Paleta de Cores**: 
  - Primary: #2c4156 (azul escuro elegante)
  - Secondary: #a7cbbf (verde suave)
  - Olive: #9eb458 (verde oliva)
  - Pastel: #f2e581 (amarelo pastel)
  - Beige: #efede3 (fundo bege)
- **Tipografia**: Bree Serif para títulos e Poppins para texto
- **Animações**: AOS (Animate On Scroll) para experiência dinâmica
- **Efeitos**: Backdrop blur, hover effects, e transições suaves

## Estrutura do Projeto
```
mentalesaude-site/
├── img/                           # Imagens utilizadas no site
│   ├── logomes.png               # Logo principal atual
│   ├── logo3.png                 # Logo anterior (backup)
│   ├── hero-background.jpg       # Imagem de fundo do hero
│   ├── platform-interface.jpg    # Interface da plataforma
│   ├── scientific-research.jpg   # Pesquisa científica
│   ├── Hevandro-Campos-2.png    # CEO - Foto da equipe
│   ├── Ricardo-Campos-2.png     # CTO - Foto da equipe
│   ├── isabela-mendes.jpg       # Psicóloga Clínica
│   ├── rafael-costa.jpg         # Neurocientista
│   ├── camila-oliveira.jpg      # Psicopedagoga
│   ├── andre-martins.jpg        # Especialista em Tecnologia
│   ├── fernanda-almeida.jpg     # Diretora Escolar (depoimento)
│   └── ricardo-souza.jpg        # Pai de aluno (depoimento)
├── docs/                         # Documentação adicional
├── index.html                    # Página principal do site
├── index2.html                   # Versão alternativa (referência visual)
├── download-images.ps1           # Script para baixar imagens
└── README.md                     # Este arquivo
```

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos customizados e responsivos
- **TailwindCSS 3.4.16**: Framework CSS via CDN com configuração customizada
- **JavaScript**: Scripts para funcionalidades interativas
- **Remixicon 4.6.0**: Biblioteca de ícones
- **AOS 2.3.1**: Animate On Scroll para animações
- **Google Fonts**: Bree Serif e Poppins

### Funcionalidades JavaScript
- Menu mobile responsivo
- Scroll suave para navegação interna
- Validação de formulário de contato
- Inicialização das animações AOS
- Efeitos visuais e transições

## Design e UX
- **Layout Responsivo**: Otimizado para mobile, tablet e desktop
- **Animações**: Elementos aparecem suavemente conforme o scroll
- **Microinterações**: Hover effects e transições em botões e cards
- **Typography Scale**: Hierarquia visual clara com diferentes tamanhos
- **Color Psychology**: Cores que transmitem confiança e profissionalismo
- **Accessibility**: Contraste adequado e navegação por teclado

## Seções do Site
1. **Header**: Logo, navegação e CTA principal
2. **Hero**: Apresentação principal com CTAs
3. **Quem Somos**: Missão, visão, valores e equipe
4. **Problema**: Desafios enfrentados pela faixa etária
5. **Solução**: Plataforma e como funciona
6. **Benefícios**: Para escolas, famílias e crianças/adolescentes
7. **Diferenciais**: Pontos únicos da Mental&Saúde
8. **Impacto**: Métricas e depoimentos
9. **Contato**: Formulário e informações de contato
10. **CTA Banner**: Call-to-action final
11. **Footer**: Links, newsletter e informações legais

## Informações de Contato Atuais
- **E-mail**: contato@mentalesaude.com.br
- **Telefone**: (21) 99441-4873
- **Endereço**: Avenida Das Américas, 500 - Barra da Tijuca, Rio de Janeiro - Capital · Downtown, CEP 22640-904

## Como rodar o projeto localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/victorgaudio/mentalesaude-site.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd mentalesaude-site
   ```
3. Abra o arquivo `index.html` no seu navegador.

**Nota**: O projeto utiliza CDNs, então é necessária conexão com internet para carregar TailwindCSS, fontes e ícones.

## Gitflow adotado
Este projeto utiliza um fluxo de trabalho baseado no Gitflow simplificado:

- **main**: branch de produção. Tudo que está aqui está pronto para ser publicado.
- **develop**: branch de desenvolvimento principal. Aqui ficam as últimas alterações estáveis, mas ainda não publicadas.
- **feat/nome-da-feature**: branches para desenvolvimento de novas funcionalidades.
- **fix/nome-do-fix**: branches para correção de bugs.

### Exemplo de fluxo
1. Para criar uma nova feature:
   ```bash
   git checkout develop
   git checkout -b feat/nome-da-feature
   # ... desenvolva sua feature ...
   git add .
   git commit -m "feat: descrição da feature"
   git push origin feat/nome-da-feature
   # Abra um Pull Request para develop
   ```
2. Para corrigir um bug:
   ```bash
   git checkout develop
   git checkout -b fix/nome-do-fix
   # ... faça a correção ...
   git add .
   git commit -m "fix: descrição do fix"
   git push origin fix/nome-do-fix
   # Abra um Pull Request para develop
   ```
3. Quando develop estiver estável e pronto para produção, faça merge em main:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

## Histórico de Desenvolvimento
- **v1.0**: Versão inicial com conteúdo completo
- **v2.0**: Aplicação da nova identidade visual e animações
- **v2.1**: Otimizações de responsividade e ajustes de layout
- **v2.2**: Atualização de logo e informações de contato

## Performance e SEO
- Imagens otimizadas para web
- Estrutura HTML semântica
- Meta tags apropriadas
- Loading assíncrono de recursos externos
- Design mobile-first

## Contribuição
Pull requests são bem-vindos! Siga o fluxo de branches acima e descreva bem suas alterações.

## Licença
Este projeto é privado e todos os direitos são reservados à Mental&Saúde.