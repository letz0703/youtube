import React, { Component } from "react";
import "./App.css";
import YtList from "./components/ytlist";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [{ name: "letz" }, { name: "rainskiss" }],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <YtList links={links} />
      </div>
    );
  }
}
