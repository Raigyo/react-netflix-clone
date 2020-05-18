import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";

import "../css/SearchBar.css"

class SearchBar extends Component {
  state = {
    value: ""
  }
  //check changes on input value
  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state; //avoid to use this.state each time
    return (
      <div className="searchBar--container">
        <div className="searchBar">
          <input
            className="searchBar--input"
            type="text"
            placeholder="Search for a movie"
            value={value}
            onChange={this.handleChange}
          />
          <div
            onClick={() => this.props.onSearchClick(value)} //inverted flow to parent Home
            className="searchBar--submit"
          ></div>
          <FaSearch className="searchIcon" name="search" />
        </div>
      </div>
    );
  }
}//\class SearchBar

export { SearchBar };