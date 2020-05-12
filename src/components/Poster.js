import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../css/Poster.css';

class Poster extends Component {

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
  }

  add = () => {
    console.log('add with redux');
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
}

export { Poster };