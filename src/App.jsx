import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import List from "./List";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Title />
      <List />
      <Footer />
    </div>
  );
}

export default App;
