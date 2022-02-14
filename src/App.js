import React, { useState } from "react";
import './App.css';

function App() {
  const [what] = useState("happy");
  console.log(what);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
