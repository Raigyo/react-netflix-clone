import React from "react";
import { FaSpinner } from "react-icons/fa";

import "../css/Spinner.css";

const Spinner = (props) => {
  return (
    <div className="spinner--container">
      <FaSpinner className="fa-spin" name="spinner" />
    </div>
  );
};

export { Spinner };