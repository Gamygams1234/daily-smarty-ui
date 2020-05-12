import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Post from "./Post";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    const posts = this.props.recentPosts.map((post, index) => {
      if (index < 3) {
        return <Post type="recent" key={post.id} {...post} />;
      }
    });
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">{posts}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recentPosts: state.posts.recentPosts,
  };
};

// later on we will put mapStateToProps , actions
export default connect(mapStateToProps, actions)(RecentPosts);
