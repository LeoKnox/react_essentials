import React, { useState, useEffect } from "react";
import './App.css';

function App({grade}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/grade/?grade=${grade}`)
    //fetch(`http://127.0.0.1:8000/grade/?grade=2`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) {
    return <div>{JSON.stringify(data)}</div>
  }

  return (
    <div>
      No data
    </div>
  );
}

export default App;
