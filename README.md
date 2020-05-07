# React / Redux: NETFLIX using API, Redux

*April 2020*

> 🔨 From Udemy
'[Maitriser React de A à Z - Créer son propre NETFLIX](https://www.udemy.com/course/maitriser-react-de-a-a-z-creer-son-propre-netflix/)'.

See demo on [GitHub page](#).

![react-redux logo](./readme-img/react-redux-logo.png)


## About

### Concepts covered

**Decompose and prioritize components**

    App

    ---Header

    ---Home page:

    ------Header Img

    ------Searchbar

    ------Posters List

    ---------Poster

    ------------Item

    ---------------Header

    ---------------HeaderDetails

    ---------------Stars

    ---------------Container

    ---------------Actor List

    ------------------Actor List

    ------Load Button / see more

**Lifecycle of Components**

![Schema: components lifecycle](./readme-img/lifecycle.png)

**Higher-order components (HOC)**

Function that takes a component as parameter and that return another component

**When to use states**

- Does the data come(s) from a parent component with props?
- Does it stays unchanged during process?
- Can it be calculated using another state or props from the component?

=> 3xNO -> *usually* use states
=> identify the best component(s) where the states have to 'live'

**Why use React.Fragment**

`<React.Fragment></React.Fragment>` or `<></>`: used if we do not begin with
html or if we use invalid DOM in JSX:
"Fragments let you group a list of children without adding extra nodes to the DOM."

**Inverted data flow**

Send data From children component to parent (ex: SearchBar, LoadingButton).


## How to use


### Localy

Clone, the [local-version](https://github.com/Raigyo/three-js/tree/local-version) branch.

Then:

```
npm install
npm start
```
Open the app using [http://localhost:3000/](http://localhost:3000/)


### Online

See demo on [GitHub page](#).

## Packages used

- [React Icons](https://react-icons.github.io/react-icons/#/)

  `npm i react-icons --save`

- [bootstrap](https://www.npmjs.com/package/bootstrap)

  `npm i bootstrap --save`

  - [Axios](https://www.npmjs.com/package/axios)

  `npm i axios --save`

## Useful links

- [Udemy: Maitriser React de A à Z - Créer son propre NETFLIX](https://www.udemy.com/course/maitriser-react-de-a-a-z-creer-son-propre-netflix/)
- [Formation React - Maitriser le framework](https://www.youtube.com/playlist?list=PLNq4tyVELD8fNXdblniGlfAd4NJAyt1Mz)
- [GitHub: udemy-react-netflix](https://github.com/JulienKisoni/udemy-react-netflix)
- [React.Component](https://fr.reactjs.org/docs/react-component.html)
- [React Lifecycle Methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [ReactJS Higher Order Components Tutorial](https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial)
- [React Developer Tools Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [React Developer Tools Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [VSC: Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [Using index.js for Fun and Public Interfaces](https://alligator.io/react/index-js-public-interfaces/)
- [ReactJS Inverse Data Flow in ES6](https://medium.com/@jtabach/reactjs-inverse-data-flow-in-es6-9d1c3c356be7)
- [API TMDB (The Movie DataBase)](https://www.themoviedb.org/)
- []()
- []()
- []()
