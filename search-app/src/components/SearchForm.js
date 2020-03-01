import React, { Component } from 'react';

import FormTitle from './FormTitle';
import FormInput from './FormInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({ term: term });
  }

  onFormSubmit(e) {
    e.preventDefault();
    e.target.querySelector('input').blur();
    this.props.onSubmit(this.state.term);
  }
  

  render() {
    return (
      <header>
        <form onSubmit={ this.onFormSubmit } className="searchForm">
          <FormTitle />
          <FormInput onChange={ this.onInputChange }/>
        </form>
      </header>
    )
  }

}

export default SearchForm;