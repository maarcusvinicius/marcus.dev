---
banner_alt: Foto de uma floresta nevada
banner: https://img.freepik.com/fotos-premium/estrada-da-floresta-com-neve-atraves-de-arvores-geladas-cobertas-de-neve-paisagem-de-inverno_174343-2365.jpg?w=900
title_prefix: Introducing
title: 👋🏻 Hello World
description: Este novo estilo de vida foi longo e demorado, então aqui está como eu cheguei até aqui.
date: '2021-08-09'
---

## :face_with_raised_eyebrow: What is this?

---

Este é o meu novo estilo de vida! Construído desde o início com uma pilha de tecnologia totalmente nova que selecionei com base no que aprendi e usei nesses anos.

Então, com a quantidade de trabalho que foi necessário para reconstruir meu perfil Front-End, uma aparência totalmente nova com vários novos recursos e opções, pensei que agora seria uma boa hora para mostrar alguns deles.

## :question: Why

---

Resumindo, demorou muito. Normalmente, tento atualizar meu perfil pessoal todos os anos. Eu uso isso como uma oportunidade mostrar o que venho usando, ver o quanto desenvolvi com novas ideias, etc. No entanto, devido a complicações, continuei adiando, adiando e nunca fazendo. No entanto, ultimamente, tive uma explosão de motivação para fazê-lo e lançá-lo. Inclusive meu site de portfólio anterior, implantado no início de 2021, parece bom até hoje. No entanto, foi construído grosso e rápido usando HTML com CSS e significa que se eu quisesse expandi-lo, era perfeitamente possível, mas qualquer outra coisa teria dado muito mais trabalho.

Então, depois de alguns meses desde o lançamento do meu último site de portfólio, decidi trabalhar com o que venho aprendendo, pegando como base, algumas inspirações nas comunidades que sou ativo!

## :hammer: Tech Stack

---

-   :atom_symbol: [React](https://reactjs.org/) / [React Native](https://reactnative.dev/) / [Preact](https://preactjs.com/) (For Production)
-   :medal: [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
-   :globe_with_meridians: [TypeScript](https://www.typescriptlang.org/)
-   :muscle: [Next.js](https://nextjs.org/)
    -   :mag: [next-seo](https://github.com/garmeeh/next-seo)
    -   :crescent_moon: [next-themes](https://github.com/pacocoursey/next-themes)
-   :female-singer: [EmotionCSS](https://emotion.sh)
-   :package: [Git](https://git-scm.com/) (For [GitBash](https://git-scm.com/downloads))
-   :lipstick: [Twin.macro](https://github.com/ben-rogerson/twin.macro) (For [Tailwind CSS](https://tailwindcss.com/))
-   :feather: [Feather Icons](https://feathericons.com/)
-   :feather: [Phosphor Icons](https://phosphoricons.com/)
-   :file_cabinet: [Hookstate](https://hookstate.js.org/)
-   :+1: [react-use](https://github.com/streamich/react-use)

## :pinching_hand: Vite

---

Originalmente, comecei a planejar, projetar e construir esta reconstrução no início de 2022, ótimo para otimização, acho que diria que Vite e Next.js são meus pricipais ambientes de produção, de projetos pessoais.

Diante o meu desenvolvimento foi avançando, eu estava planejando construir projetos usando [Vite](https://vitejs.dev/) e [React](https://reactjs.org/), e ainda faço, adoro Vite & React. No entanto, desde então, aprendi a usar outras ferramentas para criar produtos ainda melhores e mais rápidos. [Next.js](https://nextjs.org/) sendo o mais óbvio. O hot module reloading (HMR) do Vite é incrivelmente rápido! Até hoje eu ainda acho que é mais rápido que o Next.js (mesmo com o sinalizador de recurso experimental ESModules ativado), no entanto, eu estava disposto a fazer essa troca pelos outros recursos que ele oferece fora da caixa em comparação com o Vite.

## :sparkles: Features

---

Como esta é minha nova reconstrução, vem uma série de novas técnicas e melhorias.

### :muscle: Next.js

---

Lançado em 2016 sobre a licença MIT, o [Next.js](https://nextjs.org/).

Em resumo, é um framework de código aberto, criado com [React](https://reactjs.org/) e permite o desenvolvimento de aplicações tanto front-end quanto back-end.

```js:next.config.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* desenvolvimento apenas opções de configuração aqui */
    }
  }

  return {
    /* opções de configuração para todas as fases, exceto desenvolvimento aqui */
  }
}
```

### :atom_symbol: Preact

---

Um pequeno recurso que muitas vezes esqueço que adicionei, mas ajuda muito com o tamanho do pacote, é [Preact](https://preactjs.com/).

Em resumo, meus projetos Next.js estam configurando para substituir [React](https://reactjs.org/) por Preact para melhores compilações de produção.

```js:next.config.js
webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        });
    }

    return config;
},
```

### :lipstick: Tailwind

---

Uma mão na roda de recurso que depois que adicionei em um dos meus projetos, não parei, ajuda muito com a parte de estilização do desenvolvimento, é [Tailwind](https://tailwindcss.com/).

Em resumo, você adiciona a estilização dos componententes direto nas classes!

```js:index
<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500/30">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500/30">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.
  </p>
</div>
```

#### Instale Tailwind CSS

Instale `tailwindcss` via npm e crie seu
arquivo `tailwind.config.js`.

```js:Terminal
npm install -D tailwindcss
npx tailwindcss init
```

#### Configure seus caminhos de modelo

Adicione os caminhos a todos os seus arquivos de modelo
em seu arquivo `tailwind.config.js`.

```js:tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Adicione as diretivas Tailwind ao seu CSS

Adicione as diretivas `@tailwind` para cada uma das diretivas
do Tailwind camadas ao seu arquivo CSS principal.

```js:src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Inicie o processo de compilação da CLI do Tailwind

Execute a ferramenta CLI para verificar seus arquivos de
modelo para classes e construa seu CSS.

```js:Terminal
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

#### Comece a usar o Tailwind no seu HTML ou componente

Adicione seu arquivo CSS compilado ao `<head>` e comece usando
as classes utilitárias do Tailwind para estilizar seu conteúdo.

```js:src/index.html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

### :link: Finishing

---

Isto é um pouco das muitas novidades que passei, espero que no próximo ano, venho atualizar este blog e ver até onde consegui chegar, quero agradecer a todos os presentes até agora e espero conhecer e participar de mais eventos para espalhar tecnologias e informações que vejo que tem a possibilidade de mudar nosso futuro!
