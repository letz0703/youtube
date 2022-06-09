import React, { Component } from "react";
import YtList from "./ytlist";

export default class YtLists extends Component {
  render() {
    return (
      <ul className="">
        {this.props.ytlists.map((ytlist) => (
          <YtList key={ytlist.snippet.publishedAt} ytlist={ytlist} />
        ))}
      </ul>
    );
  }
}
