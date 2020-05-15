//combineReducers => to combine several reducers
import { combineReducers } from "redux";

import { movieReducer } from "./movies";

const rootReducer = combineReducers({
  movies: movieReducer,
  //users: userReducer //exemple if we want to add other reducers
});

/* Result if store.getState() :
movies: {
  movies: [],
  number: 0
}*/

export default rootReducer;
