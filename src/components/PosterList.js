import React, { Component } from 'react';
import { Poster } from './index';

import '../css/PosterList.css';

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

let wish;

class PosterList extends Component {
  renderPoster = () =>{
    //map = foreach ,  key needed
    return this.props.movies.map( movie => {
      const imgSrc = `${REACT_APP_IMAGE_BASE_URL}/${REACT_APP_POSTER_SIZE}/${movie.poster_path}`;
      wish = false;
      //Display empty or full heart
      if (this.props.localMovies) {
        this.props.localMovies.forEach((localMovie) => {
          if (movie.id === localMovie.id) {
            wish = true;
          }
        });
      }
      return (
        <Poster
          key={movie.id}
          imgSrc={imgSrc}
          wished={wish}
          movie={movie}
          mTitle={movie.title}
          mDesc={movie.overview}
          id={movie.id}
        />
      )
    })
  }
  render() {
    return (
      <div className="posterList">
        <h3 className="posterList--title">MOVIES LIST</h3>
        <div className="posterList--grid">
          {this.renderPoster()}
        </div>
      </div>
    );
  }
}//\class PosterList

export { PosterList };