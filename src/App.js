import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [what, setWhat] = useState("happy");

  useEffect(() => {
    console.log(`what ${what}`);
  });

  return (
    <>
      <h1>Hello what are you {what}</h1>
      <button onClick={() => setWhat("amazed")}>Amazed!</button>
      <button onClick={() => setWhat("excite")}>Excited!</button>
    </>
  );
}

export default App;
