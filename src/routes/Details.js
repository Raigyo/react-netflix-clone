import React, { Component } from 'react';
import { Spinner, HeaderDetails, ActorList } from "../components";
import axios from "axios";
import { API_URL, API_KEY } from "../config";

class Details extends Component {
  state = {
    loading: true,
    actors: [
      {
        name: "xxxx",
      },
      {
        name: "xxxx2",
      },
      {
        name: "xxxx3",
      },
      {
        name: "xxxx4",
      },
      {
        name: "xxxx5",
      },
    ],
    mTitle: "ff",
    mDesc: "",
    imgSrc: "",
    revenue: "",
    runtime: "",
    status: "",
    vote: "",
  }

  async componentDidMount() {
    try {
          const movieId = this.props.match.params.id; /* var from url */
          const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en`;
          const res = await this.loadInfos(url);
          console.log('res', res);
        } catch(e) {
        console.log('e', e);
    }
  }

  loadInfos = url => axios.get(url);

  render() {
    const {
      loading,
      mTitle,
      mDesc,
      actors,
      imgSrc,
      revenue,
      runtime,
      status,
    } = this.state;
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
            />
            <ActorList actors={actors} />
          </>
        )}
      </div>
    );
  }
}

export { Details };