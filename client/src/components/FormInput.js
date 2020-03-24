import React from "react";
import { connect } from "react-redux";

import { setQuery } from "../actions/setQuery";

const FormInput = ({ query, setQuery }) => (
  <div className="formInputContainer">
    <input
      className="formInput"
      type="text"
      spellCheck="false"
      placeholder="Search stock photos"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
    <button type="submit" className="searchIcon">
      <i className="fas fa-search" />
    </button>
  </div>
);

const mapStateToProps = state => ({ query: state.query });

export default connect(mapStateToProps, { setQuery })(FormInput);
