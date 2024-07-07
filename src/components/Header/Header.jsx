import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <img src="public/vite.svg" alt="" />
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>products</li>
          <li>contact us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
