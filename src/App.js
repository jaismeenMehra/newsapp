import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";


export default class App extends Component {
  render() {
    document.body.style.backgroundColor = "#F1C93B";
    return (
      <div>
        <Navbar />
        <News pageSize={9} />
      </div>
    );
  }
}
