import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import RecentPosts from "./RecentPosts";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container container-homepage">
          <Logo />
          <SearchBar />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
