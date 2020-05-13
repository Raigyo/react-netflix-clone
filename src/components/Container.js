import React from 'react';
import "../css/Container.css";

const Container = (props) => (

    <div>
      {/*<FontAwesome name={props.iconName}  />*/}
      <h3 className="container--title">{props.content}</h3>
    </div>

);


export {Container};