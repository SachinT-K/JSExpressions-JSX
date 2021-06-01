import React from "react";
import ReactDOM from "react-dom";

var name = "Sachin T K";
var date = new Date();
var currentyear = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {currentyear} </p>
  </div>,
  document.getElementById("root")
);
