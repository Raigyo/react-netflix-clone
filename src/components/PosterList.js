import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { Poster } from './index';

import '../css/PosterList.css';

let wish;

class PosterList extends Component {
  renderPoster = () =>{
    //map = foreach ,  key needed
    return this.props.movies.map( movie => {
      const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
      wish = false;
      return (
        <Poster
          key={movie.id}
          imgSrc={imgSrc}
          wished={wish}
          movie={movie}
          mTitle={movie.title}
          mDesc={movie.overview}
        />
      )
    })
  }
  render() {
    return (
      <div className="posterList">
        <h3 className="posterList--title">POPULAR MOVIES</h3>
        <div className="posterList--grid">
          {this.renderPoster()}
        </div>
      </div>
    );
  }
}

export { PosterList };