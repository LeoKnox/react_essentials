import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

ReactDOM.render(
  <App secret={true} />,
  document.getElementById('root')
);