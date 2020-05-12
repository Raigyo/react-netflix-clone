import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { Home } from './routes';
import { Header, Spinner } from './components';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import CookieConsent from "react-cookie-consent";
import './App.css';

class App extends Component {
  state = {
    loading: true,
    movies: [],
    badge: 0,
    image: null,
    mTitle: "",
    mDesc: "",
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

  //Search contact APi
  searchMovie = () => {
    const url =
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=en`;
    return axios.get(url);
  };

  //Onclick search
  handleSearch = (value) => {
    try {
      this.setState(
        { loading: true, searchText: value, image: null },
        async () => {
          const {
            data: { results, page, total_pages },
          } = await this.searchMovie();
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
        }
      );
    } catch (e) {
      console.log("e", e);
    }
    console.log("handleSearch", value);
  };

  //Click More: next page of movies
  loadMore = async () => {
    try {
      this.setState({ loading: true });
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      console.log("res", results);
      this.setState({
        movies: [...this.state.movies, ...results], //array concat
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
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* badge state: number of movies displayed */}
          <Header badge={this.state.badge} />
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
              This website uses cookies to enhance the user experience.{" "}
            </span>
          </CookieConsent>
        </div>
      </BrowserRouter>
    );
  } //\render
}//\class App

export default App;
