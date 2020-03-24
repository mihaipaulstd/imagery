import React from "react";
import { connect } from "react-redux";

import FormTitle from "./FormTitle";
import FormInput from "./FormInput";
import { getImagesOnSearch } from "../actions/getImagesOnSearch";


const SearchForm = ({ getImagesOnSearch, query }) => (
  <header>
    <form
      onSubmit={e => {
        e.preventDefault();
        if (query) {
          getImagesOnSearch();
        }
      }}
      className="searchForm"
    >
      <FormTitle />
      <FormInput />
    </form>
  </header>
);

const mapStateToProps = state => ({
  query: state.query
})

export default connect(mapStateToProps, { getImagesOnSearch })(SearchForm);
