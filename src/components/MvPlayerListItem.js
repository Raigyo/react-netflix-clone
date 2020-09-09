import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { BsXSquare } from 'react-icons/bs';
import { removeMovie } from "../actions/movie";
import { connect } from "react-redux";
import "../css/MvPlayerListItem.css";

class MvPlayerListItemComponent extends Component {



  // remove = () => {
  //   console.log('remove with redux');
  //   this.props.parentCallback(true);
  //   this.props.removeM(this.props.id)
  // }

  render() {

    /*conditionnal active or not*/
    const activeClass = this.props.active
      ? "mvPlayerListItem active"
      : "mvPlayerListItem";
    return (

      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={{
          pathname: `/player/${this.props.id}`,//from MoviePlayer
        }}
      >
        <div className={activeClass}>
          <div className="mvPlayerListItem--number">{this.props.number}</div>
          <div className="mvPlayerListItem--title">{this.props.title}</div>
          <div className="mvPlayerListItem--time">{this.props.duration}</div>
          {/*<BsXSquare
                onClick={this.remove}
                className="poster2--icon"
                name="heart"
          />*/}
        </div>
        <div className="mvPlayerListItem--divider" />
      </Link>
    );
  }
}//\class MvPlayerListItem

const mapDispatchToProps = (dispatch) => {
  return {
    removeM: (movieId) => dispatch(removeMovie(movieId)),
  };
};

//Action dispatching
const MvPlayerListItem = connect(null, mapDispatchToProps)(MvPlayerListItemComponent);

export {MvPlayerListItem};

