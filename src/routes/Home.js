import React, { Component } from 'react';
import { connect } from "react-redux";
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';
import { getMovies } from "../actions/movie";

class HomeComponent extends Component {
  //event cycle
  componentDidMount() {
    this.props.getMovies();//access movie list
  }
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
          onSearchClick={this.props.onSearchClick} //inverted flow to parent App
        />
        <PosterList movies={movies} localMovies={this.props.localMovies}/>
        <LoadButton
          onButtonClick={this.props.onButtonClick} //inverted flow to parent App
          Loading={loading}
        />
      </div>
    );
  }
}//\class HomeComponent

const mapStateToProps = (state) => {
  return {
    localMovies: state.movies.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { Home };
