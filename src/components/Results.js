import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";

class Results extends Component {
  handleResultsSubmit = (query) => {
    console.log(query);
  };
  render() {
    return (
      <div>
        <h1>Results</h1>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleResultsSubmit(query)} />
      </div>
    );
  }
}

export default Results;
