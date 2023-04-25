---
banner_alt: Screenshot of screen React animation
banner: https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
title_prefix: React
title: React / React Native
description: React.js changed my coding style!
date: '2022-05-27'
---

In the last few months, I've been pretty easy to learn and use even the classic [HTML](https://www.devmedia.com.br/o-que-e-o-html5/25820) and, this year, I've been trying to make things more difficult and take another step, learning to use a new framework for my productions, always looking for improvements and fluidity in my codes, on the advice of my mentor, he indicated me to use a totally new compilation tool that is out of this world fast [React](https://reactjs.org/) :zap :.

However, spending more time working in this area, I learned to fall in love with this technology and more specifically with [Next.js](https://nextjs.org/).

As the title implies, this post will focus specifically on how to improve [React configuration](https://pt-br.reactjs.org/) by focusing on a handful of the top/best configuration options used in other build tools like [Vite](https://vitejs.dev/).

### :wrench: More Options

---

In general I feel like there should be more options added to the config file. Looking at the [shared options in Vite](https://vitejs.dev/config/#root), here are just a few that would make a lot of sense to add:

-   [`build`](https://vitejs.dev/config/#build-target): Customize build output

    Offer more customization for your project's build configuration. In the case of Next.js, I think many existing build options could be moved here. EG: `swcMinify`, `webpack`, etc.

-   [`define`](https://vitejs.dev/config/#define): Define global constant substitutions

    As a nice alternative to having to add `NEXT_PUBLIC_` environment variables all the time, you can use this to define constant public variables.

-   [`logLevel`](https://vitejs.dev/config/#logLevel): Adjust verbosity of console output

-   [`plugins`](https://vitejs.dev/config/#plugins): Array of plugins to use

-   [`root`](https://vitejs.dev/config/#root): Project root directory

    Relearning React Over the past few months, I've been researching a number of open source projects, many of which point to a custom root directory. Most commonly a `src/` directory.

-   [`server`](https://vitejs.dev/config/#server-host): Server options

    Customize the server configuration with options like `cors`, `port`, etc.

Most of these options simply add flexibility and extensibility to the project structure for more advanced users.

### :exclamation: TypeScript

---

Moving on to what is, to me at least, one of the most obvious features to use. TypeScript support.

Today, React represents a large part of frontend development and contains several tools in its ecosystem that enhance the development experience. When we use Typescript with React, we get the benefit of writing our components well without using PropTypes. Furthermore, we benefit from the fail-fast principle, which allows us to identify and avoid errors and improve code quality.

Solid basics are important when writing code. Here are some basic habits to remember when writing typescript code. Typescript lets you bypass convention and write code your way.

Type organization is not required for a configuration file. But as I write it, it can be very helpful to have tools such as intellisense to help identify any issues with your configuration or to help save you having to dig through the documentation.

Following React's component-based coding style, we split the components into several different files. When using typescript, it's always a good idea to export the Props types along with the component.

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

Hooks are the new feature introduced in React, it allows you to use state and other features of React without writing a class. Hooks are functions that "hook" into the React state and lifecycle resources of the function's components. Does not work within classes.

Essentially, we're finally getting a native way to handle asynchronous functionality in React. Which means we don't really need to rely on useEffect to get our data, we can just create a get axios request and wrap it in a usage binding.

---

#### useState

useState is a hook that allows you to maintain state in response to functional components. This hook accepts an argument that sets the initial value of the state property. It returns the pair of values. current value of the state property and a method capable of updating that state property.

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

We also have useEffect, a function that React promises to run after every render. This is convenient, because every change to the input triggers a render. Then we can use useEffect to do our validation.

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

Our new friend accepts a function as the first argument and an array as the optional second argument.

It turns out that you no longer need to compare props or states. React allows you to provide the values in the second argument you want to run the useEffect on. So in our case, useEffect will only run on input changes.

### :globe_with_meridians: React Native

---

I kept talking and talking about this React post and I ended up forgetting that it's about React AND REACT NATIVE, but I remembered that things are practically the same :sweat_smile:.

Of course it has its differences. React JS improves site SEO, is simpler to learn and test, and makes cross-platform migration possible. React Native, on the other hand, allows us to use all the native resources of the platform, in addition to the possibility of using resources together with external applications.

However, you will not experience any difficulties in transferring your React projects to React Native, and this is one of the best advantages! Combining Dev Front with Dev Mobile helps a lot in connecting teams and project growth.

As I started with React, it wasn't so complicated to unite my projects, I use [Expo](https://expo.dev/) and the IDE [Android Studio](https://developer.android.com/studio?hl=pt) for creating Mobile projects with React Native.

### :thinking_face: Conclusion

---

Glad to know where I am, I wonder if I had stopped or given up, programming is tough! But the :heart: technology is bigger than anything, wherever I go I want to spread it, like someone did that to me one day!

It's really hard for me to see another developer who really likes technology and is as excited as I am :sweat_smile:. However, I feel this needs to be something that should be discussed more in the community and looked into further, as it could make React.js even more powerful than it already is.

---
