import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="app container">
        <SearchForm />
      </div>
    )
  }
} 

export default App;