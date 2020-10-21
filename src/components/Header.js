import React, { Component } from 'react';
import { FaFilm } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNumber } from "../actions/movie";

import {withRouter} from 'react-router-dom';
import '../css/Header.css';

class HeaderComponent extends Component {

  componentDidMount() {
      this.props.getNumber();
  }

  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="header">
        <Link to={{ pathname: "/react-netflix-clone" }} >
          <FaFilm className="header--movie" name="film" />
        </Link>
        <h3>Netflix ;-)</h3>
        <Link to={{ pathname: "/react-netflix-clone/player" }}>
          <FaHeart className="header--heart" name="heart" />
        </Link>
        <div className="header--badge">{this.props.badge}</div>
      </div>
    );
  } //\render
}//\class HeaderComponent

//A: mapStateToProps
const mapStateToProps = (state) => {
  return {
    badge: state.movies.number,//total number of movies in favourite
  };
};//\mapStateToProps


//B: mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    getNumber: () => dispatch(getNumber()),
  };
};


//Action dispatching
//'Hack': we export as component Header but the name of the class of component is HeaderComponent
const Header = connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderComponent));

export { Header };