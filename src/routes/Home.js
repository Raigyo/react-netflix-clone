import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';
import { getMovies } from "../actions/movie";

import { renderLogin } from "../utils/helpers";

const flag = renderLogin();

class HomeComponent extends Component {
  state = {
    flag: flag,
  };
  componentDidMount() {
    if (!this.state.flag) {
      this.props.history.push({ pathname: "/login" });
      return;
    }
    this.props.getMovies();
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
        <PosterList movies={movies} localMovies={this.props.localMovies} />
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


//We use 'withRouter' to make the access to history possible
const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeComponent));

export { Home };
