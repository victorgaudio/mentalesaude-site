# Mental&Saúde - Site Institucional

Este repositório contém o código-fonte do site institucional da Mental&Saúde, uma solução inovadora para avaliação e promoção da saúde mental de crianças e adolescentes.

## Sobre o Projeto
O site apresenta a missão, equipe, diferenciais, benefícios e formas de contato da Mental&Saúde, além de permitir que escolas e famílias solicitem orçamentos e conheçam mais sobre a plataforma.

### Principais Funcionalidades
- Apresentação institucional
- Seção de equipe multidisciplinar
- Benefícios para escolas e famílias
- Formulário de contato para orçamento
- Design responsivo e moderno

## Estrutura do Projeto
```
MENTALESAUDE/
├── img/                  # Imagens utilizadas no site
├── index.html            # Página principal do site
├── download-images.ps1   # Script para baixar imagens
└── README.md             # Este arquivo
```

## Tecnologias Utilizadas
- HTML5
- CSS3 (TailwindCSS via CDN)
- JavaScript (scripts simples para menu e validação)
- Remixicon (ícones)

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

## Contribuição
Pull requests são bem-vindos! Siga o fluxo de branches acima e descreva bem suas alterações.

## Licença
Este projeto é privado e todos os direitos são reservados à Mental&Saúde.