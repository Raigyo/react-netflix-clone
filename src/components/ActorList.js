import React from "react";
import { Actor } from './index';
import "../css/ActorList.css";

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

const ActorList = props => {
  const renderActor = () => {
    return props.actors.map((actor, i) => {
      const imgSrc = actor.profile_path ?
      `${REACT_APP_IMAGE_BASE_URL}/${REACT_APP_POSTER_SIZE}/${actor.profile_path}` : './images/no_image.jpg';
      return (
        <Actor key={i} imgSrc={imgSrc} name={actor.name} hover={false} />
      );
    })
  }
  return (
    <div className="actorList">
      <h3 className="actorList--title">ACTORS</h3>
      <div className="actorList--grid">{renderActor()}</div>
    </div>
  )
}//\const ActorList

export { ActorList };