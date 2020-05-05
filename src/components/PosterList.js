import React, { Component } from 'react';
import { Poster } from './index';

import '../css/PosterList.css';

let wish;

class PosterList extends Component {
  renderPoster = () =>{
    //map = foreach ,  key needed
    return this.props.movies.map( movie => {
      const imgSrc = movie.poster_path;
      wish = false;
      return (
        <Poster
          key={movie.id}
          imgSrc={imgSrc}
          hover={false}
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
        <h3 className="posterList--title">NEW MOVIES</h3>
        <div className="posterList--grid">
          {this.renderPoster()}
        </div>
      </div>
    );
  }
}

export { PosterList };