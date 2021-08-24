import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
      <img src={logo} />
    </div>
  );
}

export default App;
