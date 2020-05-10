import React, { Component } from "react";

class Post extends Component {
  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
    return topics;
  }
  // this one we use if there is an extra object
  renderLinks() {
    let links = this.props.post_links.map((link, index) => {
      return (
        <div className="post-link" key={index}>
          <div className="post-link__box"></div>
          <div className="post-link__link">
            <a href={link.link_url}>Useful Link #{index + 1}</a>
          </div>
        </div>
      );
    });
    return links;
  }

  render() {
    if (this.props.type === "recent") {
      return (
        <li className="recent-post">
          <div className="recent-post__title"> {this.props.title}</div>
          <div className="recent-post__topic">{this.renderTopics()}</div>
        </li>
      );
    } else if (this.props.type === "result") {
      return (
        <li className="result-post">
          <div className="result-post__topics">{this.renderTopics()}</div>
          <div className="result-post__title">{this.props.title}</div>
          <div className="result-post__links">{this.renderLinks()}</div>
        </li>
      );
    }
  }
}

export default Post;
