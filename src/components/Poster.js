import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { addMovie, removeMovie } from "../actions/movie";
import '../css/Poster.css';

class PosterComponent extends Component {

  state = {
    hover: false
  }

  showOverlay = () => {
    if(this.state.hover){
      return;
    }
    this.setState({ hover: true });//else
  }

  hideOverlay = () => {
    this.setState({ hover: false });
  }

  remove = () => {
    console.log('remove with redux');
    this.props.removeM(this.props.id);
  }

  add = () => {
    console.log('add with redux');
    this.props.addM(this.props.movie);
  }

  render() {
    return (
      <div
        className="poster"
        onMouseEnter={this.showOverlay}
        onMouseLeave={this.hideOverlay}
      >
        <Link to={{ pathname: `/${this.props.id}` }}>
          <img className="poster--img" src={this.props.imgSrc} alt="poster" />
        </Link>
        {/*conditional rendering: mousehover or not*/}
        {this.state.hover ? (
          <div className="poster--overlay">
            <h3 className="poster--overlay__text">WHISH LIST</h3>
            {/*conditional rendering: movie is favourite or not*/}
            {this.props.wished ? (
              <FaHeart
                onClick={this.remove}
                className="poster--icon"
                name="heart"
              />
            ) : (
              <FaRegHeart
                onClick={this.add}
                className="poster--icon__not"
                name="heart-o"
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}//\class PosterComponent

const mapDispatchToProps = (dispatch) => {
  return {
    addM: (movie) => dispatch(addMovie(movie)),
    removeM: (movieId) => dispatch(removeMovie(movieId)),
  };
};

//Action dispatching
const Poster = connect(null, mapDispatchToProps)(PosterComponent);

export { Poster };