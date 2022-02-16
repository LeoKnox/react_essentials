import React, { useState, useEffect } from "react";
import './App.css';

function App({grade}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/grade/?grade=${grade}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) {
    //return <div>{JSON.stringify(data)}</div>
    return (
      <div>
        <h1>{data[0]["kanji"]}</h1>
        <p>{data[0].meaning}</p>
        <p>{data[0].pronounciation}:{data[0].reading}</p>
      </div>
    );
  }

  return (
    <div>
      No data
    </div>
  );
}

export default App;
