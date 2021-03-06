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
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push("/results");
    });
  };
  render() {
    return (
      <div className="results">
        <Link to="/">
          <Logo size={55} />
        </Link>
        <SearchBar page="results" onSubmit={(query) => this.handleResultsSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
