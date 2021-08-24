import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
      <List />
      <img src={logo} />
    </div>
  );
}

export default App;
