import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input} />;
  }
  handleFormSubmit = ({ query }) => {
    console.log("Trying to handle Submit", query);
    // navigate to a  new route
    this.props.history.push("/results");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="search-bar homepage-search-bar">
        <Field name="query" component={this.renderInput} />
        <p>Press return to search</p>
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
