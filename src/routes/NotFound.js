import React from "react";

const NotFound = (props) => (
  <div style={divStyle}>
    <p>OOOOPS!!! PAGE NOT FOUND!</p>
  </div>
);

const divStyle = {
  margin: "200px",
  fontSize: "5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
console.log("Not Found");
export { NotFound };
