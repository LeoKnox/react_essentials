import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [what, setWhat] = useState("happy");
  const [when, setWhen] = useState("now");

  useEffect(() => {
    console.log(`what ${what}`);
  }, [what]);

  useEffect(() => {
    console.log(`when ${when}`)
  }, [when]);

  return (
    <>
      <h1>Hello what are you {what} {when}</h1>
      <button onClick={() => setWhat("amazed")}>Amazed!</button>
      <button onClick={() => setWhat("excite")}>Excited!</button>
      <button onClick={() => setWhen("later")}>Later</button>
    </>
  );
}

export default App;
