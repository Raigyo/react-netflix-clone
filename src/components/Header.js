import React, { Component } from 'react';
import { FaFilm } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <FaFilm
          className="header--movie"
          name="film"
        />
        <h3>Netflix</h3>
        <FaHeart
          className="header--heart"
          name="heart"
        />
        <div className="header--badge">{this.props.badge}</div>
      </div>
    );
  } //\render
}//\class Header

export { Header };