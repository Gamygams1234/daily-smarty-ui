import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input} />;
  }
  handleFormSubmit = ({ query }) => {
    this.props.onSubmit(query);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="search-bar homepage-search-bar">
        <div className="search-bar__wrapper">
          <Field name="query" component={this.renderInput} />
          <p>Press return to search</p>{" "}
        </div>
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
