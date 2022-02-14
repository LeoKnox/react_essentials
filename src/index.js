import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const [,next] = ["axe", "sword", "bow"];
console.log(next);

ReactDOM.render(
  <App secret={false} />,
  document.getElementById('root')
);