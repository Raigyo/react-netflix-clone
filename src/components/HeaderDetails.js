import React, { Component } from 'react';
import { Container, Stars } from "./index";
import "../css/HeaderDetails.css";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";


class HeaderDetails extends Component {
  render() {
    const imgSrc = this.props.imgSrc;
    return (
      <div className="headerDetails">
        <div className="badge-decoration">{this.props.status}</div>
        <div className="headerDetails--poster">
          <img
            className="headerDetails--poster__img"
            src={imgSrc}
            alt={this.props.mTitle}
          />
        </div>
        <div className="headerDetails--container">
          <h3 className="headerDetails--container__title">
            {this.props.mTitle}
          </h3>
          <p className="headerDetails--container__desc">{this.props.mDesc}</p>
          <div className="headerDetails--info">
            <FaMoneyCheckAlt style={{ fontSize: 25 }} />
            <Container
              iconName="FaHourglassHalf"
              content={this.props.runtime}
            />
            <Stars fakeArray1={["1", "1", "1"]} fakeArray2={["1", "1"]} />
            <FaHourglassHalf style={{ fontSize: 25 }} />
            <Container
              iconName="FaMoneyCheckAlt"
              content={this.props.revenue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { HeaderDetails };