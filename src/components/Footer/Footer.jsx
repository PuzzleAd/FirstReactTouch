import React from "react";
import "./Footer.css"

const Footer = () => {
  function year() {
    let currentDate = new Date();
    return currentDate.getFullYear();
  }

  return (
    <>
      <h1 className="copyright">Copyright {year()}</h1>
    </>
  );
};


export default Footer;