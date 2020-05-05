import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";

import "../css/SearchBar.css"

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar--container">
        <div className="searchBar">
          <input
            className="searchBar--input"
            type="text"
            placeholder="Search for a movie"
          />
          <div className="searchBar--submit"></div>
          <FaSearch
            className="searchIcon"
            name="search"
          />
        </div>
      </div>
    );
  }
}

export { SearchBar };