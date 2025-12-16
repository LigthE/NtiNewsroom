import React from "react";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", padding: "20px" }}
    >
      <Card />
    </div>
  );
};

export default App;
