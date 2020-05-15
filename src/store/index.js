import { createStore, compose } from "redux";

import rootReducer from "../reducers";

/*Compose: used to use several store enhancers. Store enhancers are higher order functions
that add some extra functionality to the store. The only store enhancer which is supplied
with Redux by default is applyMiddleware however many other are available*/

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Store creation
const store = createStore(rootReducer, {}, enhancers);

export default store;
