import React, { Component } from 'react';
import { Container, Stars } from "./index";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { calcTime, convertMoney } from '../utils/helpers';//import helpers

import "../css/HeaderDetails.css";


class HeaderDetails extends Component {
  calcVote = () => {
    this.fakeArray1 = [];
    this.fakeArray2 = [];
    //the api send a grade out of ten so we have to calculate for a grade out of five (stars)
    const vote = Math.round(this.props.vote / 2);//Math to round
    const rest = 5 - vote;
    for (let i = 0; i < vote; i++) {//number of full stars
      this.fakeArray1.push("1");
    }
    if (rest !== 0) {//number of empty stars
      for (let i = 0; i < rest; i++) {
        this.fakeArray2.push('1');
      }
    }
  }
  render() {
    this.calcVote();
    const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.props.imgSrc}`;
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
            <div className="container">
              <FaHourglassHalf style={{ fontSize: 35 }} />
              <Container
                iconName="FaHourglassHalf"
                content={calcTime(this.props.runtime)}
              />
            </div>
            <Stars fakeArray1={this.fakeArray1} fakeArray2={this.fakeArray2} />
            <div className="container">
              <FaMoneyBillAlt style={{ fontSize: 35, marginRight: 2 }} />
              <Container
                iconName="FaMoneyCheckAlt"
                content={convertMoney(this.props.revenue)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}//\class HeaderDetails

export { HeaderDetails };