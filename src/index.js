import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("ul", {style: {color:"blue", backgroundColor:"yellow"}},
    React.createElement("li", null, "Intro to react"),
    React.createElement("li", null, "with react")
  ),
  document.getElementById('root')
);