import React, { Component } from 'react';

import SearchForm from './SearchForm';
import ImageList from './ImageList'

import pexels from '../api/pexels';

class App extends Component {
  constructor() {
    super();
    this.state = {
      per_page: 80,
      page: 1,
      images: [], 
      next_page: null, 
      prev_page: null
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(term) {
    pexels.get('/v1/search', {
      params: {
        query: term,
        per_page: this.state.per_page,
        page: this.state.page
      }
    })
      .then(object => {
        this.setState({
          images: object.data.photos,
          next_page: object.data.next_page,
          prev_page: object.data.prev_page
        })
        console.log(object)
      });
  }

  render() {
    return (
      <div className="app container">
        <SearchForm onSubmit={ this.submitHandler } />
        <ImageList images={ this.state.images } />
      </div>
    )
  }
} 

export default App;