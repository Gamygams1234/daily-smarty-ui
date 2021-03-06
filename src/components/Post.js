import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

class Post extends Component {
  state = {
    activeClass: false,
  };
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
  // this is how we are going to format our links
  getNameForPostLink(str) {
    var n = str.lastIndexOf("/");
    var link = str.substring(n + 1, str.length);
    // this would end it ate the end if we did not have this checkddd
    if (n + 1 == str.length) {
      link = str.slice(0, n);
      n = link.lastIndexOf("/");
      link = str.substring(n + 1, str.length - 1);
    }

    if (link.includes(".html")) {
      link = link.substring(0, link.length - 5);
    }
    if (link.includes(".htm")) {
      link = link.substring(0, link.length - 4);
    }

    return link;
  }
  // this one we use if there is an extra object
  renderLinks() {
    if (this.props.post_links.length > 0) {
      let links = this.props.post_links.map((link, index) => {
        return (
          <div className="post-link" key={index}>
            <div className="post-link__box"></div>
            <div className="post-link__link">
              <a href={link.link_url}>{this.getNameForPostLink(link.link_url)}</a>
            </div>
          </div>
        );
      });
      return links;
    } else {
      return <div className="no-content">No Post Links.</div>;
    }
  }

  render() {
    if (this.props.type === "recent") {
      return (
        <li className="recent-post">
          <div className="result-post__title">
            <a href={this.props.url_for_post}>{this.props.title}</a>
          </div>
          <div className="recent-post__topic">{this.renderTopics()}</div>
        </li>
      );
    } else if (this.props.type === "result") {
      return (
        <li className="result-post" onMouseEnter={() => this.setState({ activeClass: true })} onMouseLeave={() => this.setState({ activeClass: false })}>
          <div className="result-post__topics">{this.renderTopics()}</div>
          <div className="result-post__title">
            <a href={this.props.url_for_post}>{this.props.title}</a>
          </div>

          <div className={this.state.activeClass ? "result-post__links result-post__links-active" : "result-post__links"}>{this.renderLinks()}</div>
        </li>
      );
    }
  }
}

export default Post;
