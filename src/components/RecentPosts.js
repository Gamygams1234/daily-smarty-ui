import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">RecentPosts</div>
          <ul className="recent-posts-posts">
            <li>Recent Post</li>
            <li>Recent Post</li>
            <li>Recent Post</li>
          </ul>
        </div>
      </div>
    );
  }
}

// later on we will put mapStateToProps , actions
export default connect(null, actions)(RecentPosts);
