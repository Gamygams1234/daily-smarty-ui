import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import RecentPosts from "./RecentPosts";

export default class Home extends Component {
  handleSearchBarSubmit = (query) => {
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
