import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const title = "Hello friend";

const Message = ({ text }) => {
  return (
    <h3>
      I say: <span className="span">{text}</span>
    </h3>
  );
};

const App = () => {
  return (
    <div className="head">
      <h1>Hello React</h1>
      <Message text={title} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
