import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import RecentPosts from "./RecentPosts";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
  handleSearchBarSubmit = (query) => {
    // this will delay the results that will show up
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push("/results");
    });
  };
  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

// this is how we get our actions
export default connect(null, actions)(Home);
