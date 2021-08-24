import React from "react";
import "./Title.css";

const Footer = () => {
  return (
    <div className="Title">
      <h1>{`This is a footer: ${new Date()}`}</h1>
    </div>
  );
};

export default Footer;
