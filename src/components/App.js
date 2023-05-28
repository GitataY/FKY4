import React from "react";
import './App.css';
import Header from "./Header";
import Donate from "./Donate";
import HowWorks from "./HowWorks";
import AddContact from "./AddContact";

function App() {
  return (
    <div>
      <Header/>
      <AddContact/>
      {/*
      <Donate/>
      <HowWorks/> 
      */}
    </div>
  )
}

export default App;
