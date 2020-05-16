import React, { Component } from 'react';
import { VideoPlayer, MvPlayerList, Spinner } from "../components/";

import "../css/MoviePlayer.css";



class MoviePlayer extends Component {

  state = {
    movies : [
      {
      duration: "2h 9m",
      id: 42967,
      imageUrl: "./images/Fast_large.jpg",
      position: 1,
      title: "Spider-man : Far from home",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
      duration: "2h 9m",
      id: 42968,
      imageUrl: "./images/Fast_large.jpg",
      position: 1,
      title: "Spider-man : Far from home",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
    ],
    selectedMovie: {
      duration: "2h 9m",
      id: 42967,
      imageUrl: "./images/Fast_large.jpg",
      position: 1,
      title: "Spider-man : Far from home",
      videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    loading: true
  }

  render() {
    const { movies, selectedMovie } = this.state;
    return (
      <div className="moviePlayer">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <VideoPlayer
              videoUrl={selectedMovie.videoUrl}
              imageUrl={selectedMovie.imageUrl}
            />
            <MvPlayerList
              movies={movies}
              selectedMovie={selectedMovie}
            />
          </>
        )}
      </div>
    );
  }
}

export  {MoviePlayer};