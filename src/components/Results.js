import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import ResultsPosts from "./ResultsPosts";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <Logo size={55} />
        </Link>
        <SearchBar onSubmit={(query) => this.handleResultsSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
