import React, { Component } from 'react';
import axios from "axios";
import _ from "lodash";
import firebase from 'firebase';
import { VideoPlayer, MvPlayerList, Spinner } from "../components/";
import { calcTime } from '../utils/helpers';
import { renderLogin } from "../utils/helpers";

import "../css/MoviePlayer.css";

const { REACT_APP_API_KEY, REACT_APP_IMAGE_BASE_URL, REACT_APP_BACKDROP_SIZE } = process.env;

let newMovies = [];

const flag = renderLogin();

class MoviePlayer extends Component {
  state = {
    movies: [],
    selectedMovie: [],
    loading: true,
    flag: flag,
    emptyList: false
  };

  async componentDidMount() {
    if (!this.state.flag) {
      this.props.history.push({ pathname: "/login" });
      return;
    }
    setTimeout(() => {
      const user = firebase.auth().currentUser;
      let dbRef;
      if(user){
        dbRef = firebase.database().ref(`users/${user.uid}`);
        dbRef.on('value', async snapshot => {
          const data = snapshot.val();
          console.log('data', data);
        })
      }
    }, 3000);

    const oldMovies = JSON.parse(localStorage.getItem("movies"));
    if (Array.isArray(oldMovies) && oldMovies.length) {//check if array is empty
      const results = await this.getNewMovies(oldMovies);
      newMovies = oldMovies.map((oldMovie, index) => {
        return {
          id: oldMovie.id,
          position: index + 1,
          title: oldMovie.title,
          duration: results[index],
          imageUrl: `${REACT_APP_IMAGE_BASE_URL}/${REACT_APP_BACKDROP_SIZE}/${oldMovie.backdrop_path}`,
          videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        };
      });
      const id = this.props.match.params.id;
      if (id){//id or not
        const selectedMovie = this.getSelectedMovie(newMovies, id);
          this.setState({
            loading: false,
            movies: [...newMovies],
            selectedMovie,
          });
      } else {
        const selectedMovie = newMovies[0];
        this.setState({
          loading: false,
          movies: [...newMovies],
          selectedMovie,
        });
        this.props.history.push({
          pathname: `/player/${selectedMovie.id}`,
        });
      }
    } else {//empty
      this.setState({
        loading: false,
        emptyList: true
      });
    }
  }//\componentDidMount

  componentDidUpdate(prevProps) {
    //console.log('component did update');
    //Update props
    if(prevProps.match.params.id !== this.props.match.params.id) {
        const id = this.props.match.params.id;
        const selectedMovie = this.getSelectedMovie(newMovies, id);
        this.setState({ selectedMovie });
    }
  }//\componentDidUpdate

  getSelectedMovie = (movies, movieId) => {
    const selectedMovie = _.find(movies, { id: parseInt(movieId, 10) });
    return selectedMovie;
  };

  //Video ended
  handleEnded = () => {
    console.log("video ended");
    const { movies, selectedMovie } = this.state;
    //Index of the current playing movie
    const movieIndex = movies.findIndex((movie) => selectedMovie.id === movie.id);
    //change index (end of array: loop otherwise: next)
    const nextMovieIndex = movieIndex === movies.length - 1 ? 0 : movieIndex + 1;
    const NewSelectedMovie = movies[nextMovieIndex];
    //next movie
    this.props.history.push({ pathname: `/player/${NewSelectedMovie.id}`,});
    this.setState({ selectedMovie: NewSelectedMovie });
  };

  //We have to retrieve duration for movies of wishlist
  getTime = movieId => {
    return new Promise((resolve, reject) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=en`;
      axios
        .get(url)
        .then((data) => {
          const duration = data.data.runtime;
          resolve(duration); //returns a Promise object that is resolved with a given value
        })
        .catch((e) => {
          console.log("e", e);
          reject("error ", e); //if Promise has been rejected
        });
    });
  };

  //We make a new array with movies from local storage
  getNewMovies = async (oldMovies) => {
    if (Array.isArray(oldMovies) && oldMovies.length) {//check if array is empty
      let promises = [];
      for (let i = 0; i < oldMovies.length; i++) {
        const element = oldMovies[i];
        const id = element.id;
        const time = await this.getTime(id);
        promises.push(calcTime(time));
      }
      return Promise.all(promises);
    }
  };

  render() {
    const { movies, selectedMovie } = this.state;
    return (
      <div className="moviePlayer">
        {this.state.loading ?
          <Spinner />
         : !this.state.emptyList ?
          <>
            <VideoPlayer
              videoUrl={selectedMovie.videoUrl}
              imageUrl={selectedMovie.imageUrl}
              handleEnded={this.handleEnded}
            />
            <MvPlayerList movies={movies} selectedMovie={selectedMovie} />
          </>
          : <div style={divStyle}><p>List is empty!</p></div>
        }
      </div>
    );
  }
}//\class MoviePlayer

const divStyle = {
  margin: "200px",
  fontSize: "5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export  {MoviePlayer};