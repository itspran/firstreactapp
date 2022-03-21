import React from "react";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={logo} alt="reactlogo" className="reactlogo" />
        </a>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
