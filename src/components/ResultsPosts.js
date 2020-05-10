import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ResultsPosts extends Component {
  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">results go here</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ResultsPosts);
