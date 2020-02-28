import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = { };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(term) {

    console.log(term);
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