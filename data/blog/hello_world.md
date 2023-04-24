---
banner_alt: Photo of a snowy forest
banner: https://img.freepik.com/fotos-premium/estrada-da-floresta-com-neve-atraves-de-arvores-geladas-cobertas-de-neve-paisagem-de-inverno_174343-2365.jpg?w=900
title_prefix: Introducing
title: 👋🏻 Hello World
description: This new lifestyle has been long and drawn out, so here's how I got here.
date: '2021-08-09'
---

## :face_with_raised_eyebrow: What is this?

---

This is my new lifestyle! Built from the ground up with an entirely new technology stack that I curated based on what I've learned and used over the years.

So with the amount of work that went into rebuilding my Front-End profile, a brand new look and feel with loads of new features and options, I thought now would be a good time to show you some of them.

## :question: Why

---

In short, it took too long. I usually try to update my personal profile every year. I use it as an opportunity to show off what I've been using, see how much I've developed with new ideas, etc. However, due to complications, I kept putting it off and putting it off and never doing it. However, lately I've had a burst of motivation to make it and release it. Even my previous portfolio site, deployed in early 2021, looks good even today. However, it was built thick and fast using HTML with CSS and meant that if I wanted to expand on it it was perfectly possible, but anything else would have been a lot more work.

So, after a few months since the launch of my last portfolio website, I decided to work with what I've been learning, taking some inspiration from the communities I'm active as a base!

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

I originally started planning, designing and building this rebuild in early 2022, great for optimization, I guess I would say Vite and Next.js are my main production environments, for personal projects.

As my development progressed, I was planning to build projects using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/), and I still do, I love Vite & React. However, since then, I've learned to use other tools to create even better products, faster. [Next.js](https://nextjs.org/) being the most obvious. Vite's hot module reloading (HMR) is incredibly fast! To this day I still think it's faster than Next.js (even with the ESModules experimental feature flag turned on), however I was willing to make that trade-off for the other features it offers out of the box compared to Vite.

## :sparkles: Features

---

As this is my new rebuild comes a host of new techniques and improvements.

### :muscle: Next.js

---

Released in 2016 under MIT license, the [Next.js](https://nextjs.org/).

In summary, it is an open source framework, created with [React](https://reactjs.org/) and allows the development of both front-end and back-end applications.

```js:next.config.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only configuration options here */
    }
  }

  return {
    /* configuration options for all phases except development here */
  }
}
```

### :atom_symbol: Preact

---

One little feature that I often forget I added, but helps a lot with package size, is [Preact](https://preactjs.com/).

In short, my Next.js projects are configuring to replace [React](https://reactjs.org/) with Preact for better production builds.

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

A hand on the wheel resource that after I added it to one of my projects, I didn't stop, it helps a lot with the styling part of the development, is [Tailwind](https://tailwindcss.com/).

In short, you add component styling right into the classes!

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

#### Install Tailwind CSS

Install `tailwindcss` via npm and
create your `tailwind.config.js` file.

```js:Terminal
npm install -D tailwindcss
npx tailwindcss init
```

#### Configure your template paths

Add the paths to all your template files
in your file `tailwind.config.js`.

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

#### Add Tailwind directives to your CSS

Add `@tailwind` directives to each of the directives
from the Tailwind layers to your main CSS file.

```js:src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Start the Tailwind CLI build process

Run the CLI tool to check your files
template for classes and build your CSS.

```js:Terminal
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

#### Start using Tailwind in your HTML or component

Add your compiled CSS file to `<head>` and start using
Tailwind's utility classes to style your content.

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

This is just a little bit of the many news that I've been through, I hope that next year, I'll come to update this blog and see how far I've managed to get, I want to thank everyone present so far and I hope to meet and participate in more events to spread technologies and information that I see that has the possibility to change our future!
