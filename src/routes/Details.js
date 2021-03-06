import React, { Component } from 'react';
import axios from "axios";

import { Spinner, HeaderDetails, ActorList } from "../components";
import { renderLogin } from "../utils/helpers";

const flag = renderLogin();
const { REACT_APP_API_KEY } = process.env;


class Details extends Component {
  state = {
    loading: true,
    actors: [],
    mTitle: "",
    mDesc: "",
    imgSrc: '',
    revenue: "",
    runtime: "",
    status: "",
    vote: "",
    flag: flag
  }

  async componentDidMount() {
    try {
      if (!this.state.flag) {
        this.props.history.push({ pathname: "/login" });
        return;
      }
      const movieId = this.props.match.params.id; /* var from url */
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=en`;
      const {
        data: {
          revenue,
          runtime,
          title,
          overview,
          status,
          vote_average,
          poster_path
        }
      } = await this.loadInfos(url);
      //set state with callback with another request fo actors and loading false
      this.setState({
        revenue,
        runtime,
        mTitle: title,
        mDesc: overview,
        status,
        imgSrc: poster_path,
        vote: vote_average
      }, async () => {
          const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${REACT_APP_API_KEY}&language=fr`;
          const { data: { cast } } = await this.loadInfos(url);
          this.setState({ actors: [...cast], loading: false });
      })
    } catch(e) {
    console.log('e', e);
    }
  }

  loadInfos = url => axios.get(url);

  render() {
    const { loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote } = this.state;
    return (
      <div className="app">
        {loading ? (
          <Spinner />
        ) : (
          <>
          <HeaderDetails
            mTitle={mTitle}
            mDesc={mDesc}
            imgSrc={imgSrc}
            runtime={runtime}
            revenue={revenue}
            status={status}
            vote={vote}
          />
          <ActorList actors={actors} />
          </>
        )}
      </div>
    );
  }
}//\class Details

export { Details };