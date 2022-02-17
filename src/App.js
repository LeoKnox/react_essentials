import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home, Study, Quiz, Error404, ListKanji, SingleKanji } from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} >
          <Route path="listkanji" element={<ListKanji />} />
          <Route path="singlekanji" element={<SingleKanji />} />
        </Route>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
