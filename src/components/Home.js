import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import RecentPosts from "./RecentPosts";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
  handleSearchBarSubmit = (query) => {
    // this is the action that we are going to get
    this.props.fetchPostsWithQuery(query);
    console.log("Trying to handle Submit", query);
    // navigate to a  new route
    this.props.history.push("/results");
  };
  render() {
    return (
      <div className="app">
        <div className="container container-homepage">
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}

// this is how we get our actions
export default connect(null, actions)(Home);
