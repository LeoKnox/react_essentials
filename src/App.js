import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home, Study, Quiz } from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
