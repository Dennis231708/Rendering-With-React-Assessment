import React from "react";
import "./Activity.css";

const Activity = ({ time, description }) => {
  return (

      <p>{time}  {description}</p>

  );
};

export default Activity;
