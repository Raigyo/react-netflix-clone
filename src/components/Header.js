import React, { Component } from 'react';
import { FaFilm } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNumber } from "../actions/movie";

import '../css/Header.css';

class HeaderComponent extends Component {
  componentDidMount() {
      this.props.getNumber();
  }
  render() {
    return (
      <div className="header">
        <Link to={{ pathname: "/" }}>
          <FaFilm className="header--movie" name="film" />
        </Link>
        <h3>Netflix</h3>
        <FaHeart className="header--heart" name="heart" />
        <div className="header--badge">{this.props.badge}</div>
      </div>
    );
  } //\render
}//\class Header

//A: mapStateToProps
const mapStateToProps = (state) => {
  return {
    badge: state.movies.number,
  };
};//\mapStateToProps


//B: mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    getNumber: () => dispatch(getNumber()),
  };
};

//'Hack': we export as component Header but the name of the class of component is HeaderComponent
const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export { Header };