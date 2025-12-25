import React, { useState } from "react";
import Card from "./components/Card";
import { NewsList } from "./data";
import { Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App p-5 flex flex-col items-center">
      <nav className="mb-4">
        <Link to="/" className="mr-4 text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="mr-4 text-green-500 hover:underline">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Card articles={NewsList} />} />
        <Route path="/about" element={<p>about this NewsNtiSite </p>} />
      </Routes>
    </div>
  );
};

export default App;
