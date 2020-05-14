# React - Redux - Firebase: Master React from A to Z - Create your own NETFLIX

*April / May 2020*

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

**Decompose routing**

    App

    ---Header

    ---Details

    ------HeaderDetails

    ---------Container

    ---------Stars

    ------ActorList

    ---------Actors

**Lifecycle of Components**

![Schema: components lifecycle](./readme-img/react-lifecycle.png)

**Higher-order components (HOC)**

Function that takes a component as parameter and that return another component

**When to use states**

- Does the data come(s) from a parent component with props?
- Does it stays unchanged during process?
- Can it be calculated using another state or props from the component?

=> 3xNO -> *usually* use states

=> identify in which component(s) the states have to 'live'

**Why use React.Fragment**

`<React.Fragment></React.Fragment>` or `<></>`: used if we do not begin with
html or if we use invalid DOM in JSX:
"Fragments let you group a list of children without adding extra nodes to the DOM."

**Inverted data flow**

Send data From children component to parent (ex: SearchBar, LoadingButton).

**React Router (Route, Link, Switch)**

When you need to navigate through a React application with multiple views,
you’ll need a router to manage the URLs. React Router takes care of that,
keeping your application UI and the URL in sync.

**Redux**

A Predictable State Container for JS Apps.

![redux schema](./readme-img/redux-schema.png)

See my watch about [Redux](https://docs.google.com/presentation/d/1EvizpkOZKV1wntQODdG3H05CArLIxwIG46INIvsqdDI/edit#slide=id.gc6f73a04f_0_0)

[Playground](https://stephengrider.github.io/JSPlaygrounds/)

**Exemple**

```
//Initial state
const initialState = {
  "name": "Vincent",
  "age": 42
}

//Reducer (state, action)
//Pure: always return a new state
//We use one reducer, but we can use several reducers if needed
const reducer = (state = initialState, action) => {
  //If an action is dispatched
  if(action.type === "INCREMENT_AGE"){
    return {
      "name": state.name,
      "age": state.age + action.payload
    }
  }
  if(action.type === "CHANGE_NAME"){
    return {
      "name": action.payload,
      "age": state.age
    }
  }
  //Return the new state to the store
  return state;
}

//Store
//There is only one store
const store = Redux.createStore(reducer);

//Value of global state
store.getState()
// => {"name":"Vincent","age":42}

//Action 1 (it will display the state again)
const action1 = {
 type: "INCREMENT_AGE",
  payload: 3
}
// => {"name":"Vincent","age":42}

//Dispatch action1 to reducer
store.dispatch(action1);
// => "type":"INCREMENT_AGE","payload":3}

//Value of new state in the store
store.getState();
// => {"name":"Vincent","age":45}

//Action 2 (it will display the state again)
const action2 = {
  type: "CHANGE_NAME",
  payload: "Daniel"
}
// => {"name":"Vincent","age":45}

//Dispatch action2 to reducer
store.dispatch(action2)
// => {"type":"CHANGE_NAME","payload":"Daniel"}

//Value of new state in the store
store.getState();
// => {"name":"Daniel","age":45}

```

## How to use


### Localy

Clone, the [local-version](https://github.com/Raigyo/three-js/tree/local-version) branch.

Then:

```
npm install
npm start
```
Open the app using [http://localhost:3000/](http://localhost:3000/)

**Warning: you have to rename *_config.js* by *config.js* and provide your own key for API TMDB**

### Online

See demo on [GitHub page](#).

## Packages used

- [React Icons](https://react-icons.github.io/react-icons/#/)

  `npm i react-icons --save`

- [Bootstrap](https://www.npmjs.com/package/bootstrap)

  `npm i bootstrap --save`

- [Axios](https://www.npmjs.com/package/axios)

  `npm i axios --save`

- [React Cookie Consent](https://www.npmjs.com/package/react-cookie-consent)

  `npm i react-cookie-consent`

- [React Router Dom](https://www.npmjs.com/package/react-router-dom)

  `npm i react-router-dom`

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
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- []()
- []()
