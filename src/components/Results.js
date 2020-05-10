import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import * as actions from "../actions";

class Results extends Component {
  handleResultsSubmit = (query) => {
    // this is the action that we are going to get
    this.props.fetchPostsWithQuery(query);
    console.log("Trying to handle Submit", query);
    // navigate to a  new route
    this.props.history.push("/results");
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

export default connect(null, actions)(Results);
