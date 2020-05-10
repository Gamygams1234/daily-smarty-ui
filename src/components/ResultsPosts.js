import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Post from "./Post";

class ResultsPosts extends Component {
  render() {
    const posts = this.props.resultsPosts.map((post, index) => {
      return <Post type="result" key={post.id} {...post} />;
    });
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">{posts}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultsPosts: state.posts.resultsPosts,
  };
};

export default connect(mapStateToProps, actions)(ResultsPosts);
