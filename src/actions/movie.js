import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from "./index";

export const addMovie = movie => {
  //check if there are movies in local storage
  let movies = JSON.parse(localStorage.getItem("movies"));
  //add movie after existing ones
  if (movies) {
    movies = [...movies, movie];
  } else {//add movie to an empty array
    movies = [];
    movies.push(movie);
  }
  localStorage.setItem("movies", JSON.stringify(movies));//update local storage
  return {
    type: ADD_MOVIE,
    payload: movies,
  };
}

export const removeMovie = (movieId) => {
  const oldMovies = JSON.parse(localStorage.getItem("movies"));//all the movies in wishlist
  const movies = oldMovies.filter((movie) => movie.id !== movieId);//we keep all the movies-movieId
  localStorage.setItem("movies", JSON.stringify(movies));//update local storage
  return {
    type: REMOVE_MOVIE,
    payload: movies,
  };
};

export const getMovies = () => {
  const movies = JSON.parse(localStorage.getItem("movies"));
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const getNumber = () => {
  const movies = JSON.parse(localStorage.getItem("movies"));
  let number;
  if (movies) {
    number = movies.length;
  } else {
    number = 0;
  }
  return {
    type: GET_NUMBER,
    payload: number,
  };
};