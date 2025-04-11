import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h1>My Portfolio</h1>
      <link rel="stylesheet" href="/Users/ranjan/Desktop/Portfolio/portfolio-app/styles.css"></link>
      <ul>
        <li><a href="/Users/ranjan/Desktop/Portfolio/portfolio-app/home.html">Home</a></li>
        <li><a href="/Users/ranjan/Desktop/Portfolio/portfolio-app/about.html">About</a></li>
        <li><a href="/Users/ranjan/Desktop/Portfolio/portfolio-app/projects.html">Projects</a></li>
        <li><a href="/Users/ranjan/Desktop/Portfolio/portfolio-app/contact.html">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
