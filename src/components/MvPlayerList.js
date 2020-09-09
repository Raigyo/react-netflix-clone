import React, { Component } from 'react';
import { MvPlayerListItem } from "./index";

import '../css/MvPlayerList.css';

class MvPlayerList extends Component {


  constructor(props) {
    super(props);
    this.state = { reload: false };

  }

  callbackFunction = (childData) => {
    console.log(childData);
    this.setState({
      reload: childData
    })
  }

  renderList = (props) => {
    //props from local storage
    return props.movies.map((movie, i) => {
      const active = movie.id === props.selectedMovie.id ? true : false;//video active or not
      return (
        <MvPlayerListItem parentCallback = {this.callbackFunction}
          {...movie}
          key={movie.id}
          number={i + 1}
          active={active}
        />
      );
    });
  };
  render() {

    //Total Number of movies
    // const lenObj = JSON.parse(localStorage.getItem('movies'));
    // const total = lenObj.length;
    return (
      <div className="mvPlayerList">
        <div className="mvPlayerList--header">
          <h3>Current movie: {this.props.selectedMovie.title}</h3>
          {/*<div className="mvPlayerList--badge">
            {position}/{total}
          </div>*/}
        </div>
        <div className="mvPlayerList--list">{this.renderList(this.props)}</div>

      </div>

    );
  }
}//\class MvPlayerList

export {MvPlayerList};