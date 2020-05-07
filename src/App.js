import React, { Component } from "react";
import axios from 'axios';
import { Home } from './routes';
import { Header } from './components';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Fast and Furious",
      },
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475558,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious",
      },
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475559,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious",
      },
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475554,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "../images/Fast_small.jpg",
        title: "Fast and Furious",
      },
    ],
    badge: 0,
    image: "./images/Fast_large.jpg",
    mTitle: "Title",
    mDesc: "Lorem ipsum...",
    activePage: 0,
    totalPages: 0,
    searchText: "",
  };

  //Load data from API/Update states
  async componentDidMount() {
    try {
      //initFirebase();
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      console.log("res", results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      });
    } catch (e) {
      console.log("e", e);
    }
  }

  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en`;
    return axios.get(url);
  };

  handleSearch = (value) => {
    //lanch research
    console.log("handleSearch", value);
  };

  //Next page
  loadMore = async () => {
    try {
      this.setState({ loading: true });
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      console.log("res", results);
      this.setState({
        movies: [...this.state.movies, ...results],//array concat
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      });
    } catch (e) {
      console.log("error load more", e);
    }
    // lancer une requette ici
    console.log("load more");
  };

  render() {
    return (
      <div className="App">
        {/* badge state: number of movies displayed */}
        <Header badge={this.state.badge} />
        <Home
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
      </div>
    );
  } //\render
}//\class App

export default App;
