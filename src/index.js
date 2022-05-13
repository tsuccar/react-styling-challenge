//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
let greetings = "Hello";
let inlineStyle = {};
const date = new Date().getHours();

if (date >= 0 && date <= 12) {
  greetings = "Good Mornring";
  inlineStyle.color = "red";
} else if (date >= 12 && date <= 18) {
  greetings = "Good Afternoon";
  inlineStyle.color = "green";
} else {
  greetings = "Good Evening";
  inlineStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={inlineStyle} className="heading">
    {greetings}{" "}
  </h1>,
  document.getElementById("root")
);
