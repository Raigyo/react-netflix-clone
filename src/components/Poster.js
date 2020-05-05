import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

import '../css/Poster.css';

class Poster extends Component {
  render() {
    return (
        <div className="poster">
          <img className="poster--img" src={ this.props.imgSrc } alt="poster" />
          { /*conditional rendering: mousehover or not*/ }
          { this.props.hover ?
          (
            <div className="poster--overlay">
              <h3 className="poster--overlay__text">WHISH LIST</h3>
              { /*conditional rendering: movie is favourite or not*/}
              { this.props.wished ?
                (<FaHeart
                  className="poster--icon"
                  name="heart"
                />) :
                (<FaRegHeart
                  className="poster--icon_not"
                  name="heart-o"
                />)
              }
            </div>
          ): null}
        </div>
    );
  }
}

export { Poster };