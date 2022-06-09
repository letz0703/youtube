import React, { Component } from "react";
import YtList from "./ytlist";

export default class YtLists extends Component {
  handleList = (ytlist) => {
    this.props.handleList(ytlist);
  };

  render() {
    return (
      <ul className="">
        {this.props.ytlists.map((ytlist) => (
          <YtList
            key={ytlist.snippet.publishedAt}
            ytlist={ytlist}
            handleList={this.handleList}
          />
        ))}
      </ul>
    );
  }
}
