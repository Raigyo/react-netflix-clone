import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Details, NotFound, MoviePlayer, Login, Payment } from "./routes";
import { Header, Spinner } from './components';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import { initFirebase } from "./utils/firebase-config";
import CookieConsent from "react-cookie-consent";
import store from "./store";

import './App.css';

class App extends Component {
  state = {
    loading: true,
    movies: [],
    badge: 0,
    image: null,
    mTitle: "",
    mDesc: "",
    activePage: 1,
    totalPages: 0,
    searchText: "",
    searchMovies: false
  };

  // Load data from API / Update states
  async componentDidMount() {
    try {
      initFirebase();
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      console.log("results loadMovies: ", results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
        searchMovies: false
      });
    } catch (e) {
      console.log("error loadMovies: ", e);
    }
  }

  // AXIOS REQUEST API

  // Axios contact APi - called on 'componentDidMount'
  loadMovies = () => {
    const page = this.state.activePage;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=en`;
    return axios.get(url);
  };

  // Axios contact APi - called on 'handleSearch'
  searchMovie = () => {
    const url =
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=en`;
    return axios.get(url);
  };

  // Axios contact APi - called on 'loadMore'
  moreMovie = () => {
    // console.log("state.searchMovies: ", this.state.searchMovies);
    const page = this.state.activePage+1;
    if (this.state.searchMovies){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&page=${page}&language=en`;
      return axios.get(url);
    }
    else {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=en`;
      return axios.get(url);
    }
  };

  // BUTTONS EVENTS

  // Onclick button: 'search for a movie'
  handleSearch = (value) => {
    try {
      this.setState(
        { loading: true, searchText: value, image: null },
        async () => {
          const {
            data: { results, page, total_pages },
          } = await this.searchMovie();
          console.log("res handleSearch: ", results);
          this.setState({
            movies: results,
            loading: false,
            activePage: page,
            totalPages: total_pages,
            image: `http://image.tmdb.org/t/p/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
            mTitle: results[0].title,
            mDesc: results[0].overview,
            searchMovies: true
          });
        }
      );
    } catch (e) {
      console.log("e", e);
    }
    //console.log("handleSearch", value);
  };

  // Onclick button: 'see more'
  loadMore = async () => {
    try {
      this.setState({ loading: true });
      const {
        data: { results, page, total_pages },
      } = await this.moreMovie();
      console.log("res", results);
      this.setState({
        movies: [...this.state.movies, ...results], //array concat
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `http://image.tmdb.org/t/p/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      });
    } catch (e) {
      console.log("error load more", e);
    }
  };

  // RENDER

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={true}>
          <div className="App">
            {/* badge state: number of movies displayed */}
            <Header badge={this.state.badge} />
            {/* conditionnal: spinner or content */}
            {!this.state.image ? (
              <Spinner />
            ) : (
              <Switch>
                {/*The exact param disables the partial matching for a route and makes
              sure that it only returns the route if the path
              is an EXACT match to the current url.*/}
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Home
                      {...this.state}
                      onSearchClick={this.handleSearch}
                      onButtonClick={this.loadMore}
                    />
                  )}
                />
                <Route path="/player" exact component={MoviePlayer} />
                <Route path="/player/:id" exact component={MoviePlayer} />
                <Route path="/login" exact component={Login} />
                <Route path="/payment" exact component={Payment} />
                <Route path="/:id" exact component={Details} />
                <Route component={NotFound} />
              </Switch>
            )}
            <CookieConsent
              location="bottom"
              buttonText="Understood"
              cookieName="cookieAccept"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#4e503b", fontSize: "20px" }}
              expires={150}
            >
              <span style={{ fontSize: "20px" }}>
                This website uses local storage to enhance the user experience.{" "}
              </span>
            </CookieConsent>
          </div>
        </BrowserRouter>
      </Provider>
    );
  } //\render
}//\class App

export default App;
