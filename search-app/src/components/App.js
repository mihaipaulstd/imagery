import React, { Component } from 'react';

import SearchForm from './SearchForm';

import pexels from '../api/pexels';

class App extends Component {
  constructor() {
    super();
    this.state = { per_page: 80, page: 1 };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(term) {
    pexels.get('/search', {
      params: {
        query: term,
        per_page: this.state.per_page,
        page: this.state.page
      }
    })
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="app container">
        <SearchForm onSubmit={ this.submitHandler }/>
      </div>
    )
  }
} 

export default App;