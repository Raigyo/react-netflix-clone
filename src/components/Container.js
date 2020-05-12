import React from 'react';
import "../css/Container.css";

const Container = (props) => (
  <div>
    <div className="container">
      {/*<FontAwesome name={props.iconName}  />*/}
      <h3 className="container--title">{props.content}</h3>
    </div>
  </div>
);


export {Container};