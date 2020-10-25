import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BsXSquare } from 'react-icons/bs';
import { removeMovie } from "../actions/movie";
import { connect } from "react-redux";
import "../css/MvPlayerListItem.css";

class MvPlayerListItemComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

// remove with redux
 remove = () => {
   console.log('remove with redux');
   this.props.parentCallback(true);
   this.props.removeM(this.props.id);
   this.setState({redirect: true});
 }

  render() {

    if (this.state.redirect) {
      return <Redirect push to="/player" />;
    }

    /*conditionnal active or not*/
    const activeClass = this.props.active
      ? "mvPlayerListItem active"
      : "mvPlayerListItem";
    return (
      <div>
        <div>
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
            </div>
          </Link>
          <BsXSquare
            onClick={this.remove}
            className="poster2--icon"
            size={32}
            name="heart"
          />
        </div>
        <div className="mvPlayerListItem--divider" />
      </div>
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

