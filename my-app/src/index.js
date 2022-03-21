import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header.js";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

// const site = (
//   <div>
//     <img src={logo} alt="react" width="100px" />
//     <h1>Fun Facts About React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
