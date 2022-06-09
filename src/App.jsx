import React, { Component } from "react";
import "./App.css";
import YtList from "./components/ytlist";

export default class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <YtList />
      </div>
    );
  }
}
