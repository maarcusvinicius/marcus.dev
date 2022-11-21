---
banner_alt: Screenshot of screen React animation
banner: https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
title_prefix: React
title: React / React Native
description: React.js mudou meu estilo de código!
date: '2022-05-27'
---

Nos últimos meses, tenho sido bem tranquilo aprender e usar mesmo
o classico [HTML](https://www.devmedia.com.br/o-que-e-o-html5/25820) e, neste ano, tenho procurado dificultar mais a coisas e dar mais um passo, aprendendo a utilizar um novo framework para minhas produções, buscando sempre melhorias e fluidez nos meus códigos, a conselho do meu mentor, me indicou utilizar uma ferramenta de compilação totalmente nova que está fora deste mundo rápido [React](https://reactjs.org/) :zap:.

No entanto, passando mais tempo trabalhando nesta área, aprendi a me apaixonar por essa tecnologia e mais especificamente por [Next.js](https://nextjs.org/).

Como o título indica, este post vai focar especificamente em como melhorar a [configuração do React](https://pt-br.reactjs.org/) focando em um punhado das principais/melhores opções de configuração usadas em outras ferramentas de construção como [Vite](https://vitejs.dev/).

### :wrench: More Options

---

Em geral, sinto que deveria haver mais opções adicionadas ao arquivo de configuração. Olhando para as [opções compartilhadas no Vite](https://vitejs.dev/config/#root), aqui estão apenas algumas que fariam muito sentido adicionar:

-   [`build`](https://vitejs.dev/config/#build-target): Personalizar a saída da compilação

    Ofereça mais customização para a configuração de build do seu projeto. No caso de Next.js, acho que muitas opções de construção existentes poderiam ser movidas para cá. EX.: `swcMinify`, `webpack`, etc.

-   [`define`](https://vitejs.dev/config/#define): Definir substituições constantes globais

    Como uma boa alternativa para ter que adicionar variáveis de ambiente `NEXT_PUBLIC_` o tempo todo, você pode usar isso para definir variáveis públicas constantes.

-   [`logLevel`](https://vitejs.dev/config/#logLevel): Ajustar verbosidade de saída do console

-   [`plugins`](https://vitejs.dev/config/#plugins): Matriz de plugins para usar

-   [`root`](https://vitejs.dev/config/#root): Diretório raiz do projeto

    Reaprendendo o React Nos últimos meses, tenho pesquisado vários projetos de código aberto, muitos dos quais apontam para um diretório raiz personalizado. Mais comumente um diretório `src/`.

-   [`server`](https://vitejs.dev/config/#server-host): Opções do servidor

    Personalize a configuração do servidor com opções como `cors`, `port`, etc.

A maioria dessas opções simplesmente adiciona flexibilidade e extensibilidade à estrutura do projeto para usuários mais avançados.

### :exclamation: TypeScript

---

Passando para o que é, pelo menos para mim, uma das características mais óbvias a se utilizar. Suporte a TypeScript.

Hoje, o React representa grande parte do desenvolvimento frontend e contém diversas ferramentas em seu ecossistema que aprimoram a experiência de desenvolvimento. Quando usamos Typescript com React, obtemos o benefício de escrever bem nossos componentes sem usar PropTypes. Além disso, nos beneficiamos do princípio fail-fast, que nos permite identificar e evitar erros e melhorar a qualidade do código.

Noções básicas sólidas são importantes ao escrever código. Aqui estão alguns hábitos básicos a serem lembrados ao escrever código datilografado. O Typescript permite que você desconsidere as convenções e escreva o código do seu jeito.

A organização de tipo não é necessária para um arquivo de configuração. Mas, ao escrevê-lo, pode ser muito útil ter ferramentas, como intellisense, para ajudar a identificar quaisquer problemas com sua configuração ou ajudar a evitar que você tenha que procurar a documentação.

Seguindo o estilo de codificação baseado em componentes do React, separamos os componentes em vários arquivos diferentes. Ao usar o typescript, é sempre uma boa ideia exportar os tipos de Props junto com o componente.

```ts:App
import * as React from 'react';

export type TooltipProps = {
  message: string;
  position?: 'top' | 'bottom';
  className?: string;
  classes?: string;
};

const Tooltip: React.CFC<TooltipProps> = ({message, position = 'top', children, className, classes}) => {
  return (
    <div className={`tooltip-wrapper`}>
      {children}
      <div
        className={`tooltip-message ${className}`}>
        <span
          className={`tooltip-message-text ${classes}`}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
```

### :electric_plug: Hooks

---

Hooks são o novo recurso introduzido no React, ele permite que você use o estado e outros recursos do React sem escrever uma classe. Ganchos são funções que se "engancham" no estado do React e nos recursos do ciclo de vida dos componentes da função. Não funciona dentro das classes.

Essencialmente, estamos finalmente obtendo uma maneira nativa de lidar com a funcionalidade assíncrona no React. O que significa que realmente não precisamos confiar em useEffect para obter nossos dados, podemos apenas criar uma solicitação get axios e envolvê-la em uma associação de uso.

---

#### useState

O useState é um gancho que permite manter o estado de reação a componentes funcionais. Esse gancho aceita um argumento que define o valor inicial da propriedade de estado. Ele retorna o par de valores. valor atual da propriedade de estado e um método capaz de atualizar essa propriedade de estado.

```bash:App
import React, { useState } from 'react';

export const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>
         Increment Value
      </button>
      <p>{counter}</p>
    </div>
  )
}
```

---

#### useEffect

Temos também o useEffect, uma função que o React promete executar após cada renderização. Isso é conveniente, porque cada alteração na entrada aciona uma renderização. Então podemos usar useEffect para fazer nossa validação.

```bash:App
  useEffect(
    () => {
      if (input > 480 || input === 0) {
        setValid(false);
      } else {
        setValid(true);
      }
    },
    [input]
  );
```

Nosso novo amigo aceita uma função como primeiro argumento e um array como segundo argumento opcional.

Acontece que você não precisa mais comparar adereços ou estados. O React permite que você forneça os valores no segundo argumento no qual deseja executar o useEffect. Portanto, em nosso caso, useEffect será executado apenas em alterações na entrada.

### :globe_with_meridians: React Native

---

Fiquei falando e falando neste post de React e acabei esquecendo que é sobre React E REACT NATIVE, mas lembrei que as coisas são praticamente as mesmas :sweat_smile:.

Claro que tem suas diferenças. O React JS melhora o SEO do site, é mais simples de aprender e testar, possibilitando a migração entre plataformas. Já o React Native permite que usemos todos os recursos nativos da plataforma, além da possibilidade de utilizar recursos em conjunto com aplicações externas.

Porém você não vai sentir dificuldades em transfirir seus projetos React para React Native, e esse é uma das melhores vantagens! Unir o Dev Front com o Dev Mobile ajuda bastante a conexão das equipes e crescimento de projetos.

Como começei com React, não foi tão complicado unir meus projetos, utilizo o [Expo](https://expo.dev/) e a IDE [Android Studio](https://developer.android.com/studio?hl=pt) para criação de projetos Mobile com React Native.

### :thinking_face: Conclusion

---

Fico feliz em saber onde estou, fico pensando se eu tivesse parado ou desistido, a programação é difícil! Porém o :heart: a tecnologia é maior que qualquer coisa, aonde eu for eu quero espalhar isso, como alguém fez isso comigo um dia!

É muito difícil eu ver outro desenvolvedor que realmente gosta de tecnologia e tão empolgado quanto a mim :sweat_smile:. Porém, sinto que isso precisa ser algo que deve ser discutido mais na comunidade e analisado mais a fundo, pois pode tornar o React.js ainda mais poderoso do que já é.

---
