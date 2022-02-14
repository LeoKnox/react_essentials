import React, { useState } from "react";
import './App.css';

function App() {
  const [what, setWhat] = useState("happy");
  console.log(what);
  return (
    <>
      <h1>Hello what are you {what}</h1>
      <button onClick={() => setWhat("amazed")}>Amazed!</button>
      <button onClick={() => setWhat("excite")}>Excited!</button>
    </>
  );
}

export default App;
