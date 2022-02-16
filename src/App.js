import React, { useState, useEffect } from "react";
import './App.css';

function App({grade}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!grade) return;
    setLoading(true);
    fetch(`http://127.0.0.1:8000/grade/?grade=${grade}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [grade]); // grade here call use effect when changes!

  if (loading) return <h3>Loading ... </h3>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data[0]["kanji"]}</h1>
      <p>{data[0].meaning}</p>
      <p>{data[0].pronounciation}:{data[0].reading}</p>
    </div>
  );

  return (
    <div>
      No data
    </div>
  );
}

export default App;
