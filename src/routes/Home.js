import React, { Component } from 'react';

import { HeaderImg, SearchBar, PosterList } from '../components';

const movies = [
    {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475557,
        overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Fast and Furious"
    },
    {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475558,
        overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious"
    },
    {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475559,
        overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious"
    },
    {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475554,
        overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious"
    }
];

class Home extends Component {
  render() {
    return (
        <div>
          <HeaderImg
            title="Fast and Furious"
            overview="Dans les années 1980, à Gotham City, Arthur Fleck"
            //imgScr={require('../images/Fast_large.jpg')}
            imgScr={'./images/Fast_large.jpg'}
          />
          <SearchBar />
          <PosterList movies={movies} />
        </div>
    );
  }
}

export { Home };