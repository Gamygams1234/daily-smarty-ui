import React, { Component } from "react";

export default class RecentPosts extends Component {
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
