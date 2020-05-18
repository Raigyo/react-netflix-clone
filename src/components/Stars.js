import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import "../css/Stars.css";

const Stars = (props) => {
  //Display full stars
  const renderStars1 = () => {
    return props.fakeArray1.map((element, i) => {
      return <FaStar key={i} className="stars" name="star" />;
    });
  };
  //Display empty stars
  const renderStars2 = () => {
    return props.fakeArray2.map((element, i) => {
      return <FaRegStar key={i} className="stars" name="star-o" />;
    });
  };
  return (
    <div className="stars--container">
      {renderStars1()}
      {renderStars2()}
    </div>
  );
};//\const Stars

export { Stars };