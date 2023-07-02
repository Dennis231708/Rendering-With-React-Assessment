import React from "react";
import "./Header.css";

const Header = ({ name, imageSrc, birthday }) => {
  return (
    <div>
      <img src={imageSrc} alt="Kitten" />
      <h1>{name}</h1>
      <p>Birthday: {birthday}</p>
    </div>
  );
};

export default Header;
