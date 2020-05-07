import React, { Component } from 'react';

import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';

class Home extends Component {
  render() {
    const { mTitle, mDesc, image, movies, loading } = this.props;
    return (
      <div>
        <HeaderImg
          title={mTitle}
          overview={mDesc}
          //imgScr={require('../images/Fast_large.jpg')}
          imgScr={image}
        />
        <SearchBar
          onSearchClick={this.props.onSearchClick}//inverted flow to parent App
        />
        <PosterList movies={movies} />
        <LoadButton
          onButtonClick={this.props.onButtonClick} //inverted flow to parent App
          Loading={loading}
        />
      </div>
    );
  }
}

export { Home };