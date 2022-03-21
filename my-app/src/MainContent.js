import React from "react";
import logo from "./logo.svg";
import backlogo from "./backlogo.png";
export default function MainContent() {
  return (
    <div>
      <h1 className="reasonsheader">Reasons I'm excited to learn React</h1>
      <ul className="reasons">
        <li>
          <span>
            It's a popular library, so I'll be able to fit in <br /> with the
            cool kids!
          </span>
        </li>
        <li>
          <span>
            I'm more likely to get a job as a <br /> developer if I know React
          </span>
        </li>
        <li>
          <span>
            I want to deploy more web-based projects <br />
            to further my fullstack career
          </span>
        </li>
      </ul>
      <img src={backlogo} alt="react-logo" className="backlogo" />
    </div>
  );
}
