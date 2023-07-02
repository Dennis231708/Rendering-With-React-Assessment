import React from "react";
import "./HobbyList.css";

const HobbyList = ({ hobbies }) => {
  return (
    <div>
      {hobbies.length > 0 && <h4>Hobbies</h4>}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
