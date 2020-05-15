import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from "../actions";

const initialState = {
  movies: [],
  number: 0,
};

//Reducers need state and action
export const movieReducer = (state = initialState, action) => {

  //Wich action has been dispached?
  switch (action.type) {
    case ADD_MOVIE:
      console.log("add movie called", action.payload);
      return {
        movies: action.payload,//movies in wish list
        number: action.payload.length//number of movies in wish list
      }
    case REMOVE_MOVIE:
      console.log("remove movie called", action.payload);
      return {
        movies: action.payload,//movies in wish list
        number: state.number - 1//number of movies in wish list-1
      }
    case GET_MOVIES:
      console.log("get movies called", action.payload);
      return {
        ...state,//previous state
        movies: action.payload//movies in wish list
      }
    case GET_NUMBER:
      console.log("get number called", action.payload);
      return {
        ...state,//previous state
        number: action.payload//number of movies
      }
    default:
      return state;
  }
}