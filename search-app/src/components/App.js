import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchForm from './SearchForm';
import ImageCard from './ImageCard';

import pexels from '../api/pexels';

class App extends Component {
  constructor() {
    super();
    this.state = {
      per_page: 9,
      page: 1,
      images: [],
      currentTerm: null
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.fetchMoreImages = this.fetchMoreImages.bind(this);
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
          currentTerm: term
        })
      });
  }
  
  fetchMoreImages() {
    pexels.get('/v1/search', {
      params: {
        query: this.state.currentTerm,
        per_page: this.state.per_page,
        page: this.state.page + 1
      }
    })
      .then(object => {
        console.log(this.state)
        this.setState({
          images: this.state.images.concat(object.data.photos),
          page: this.state.page + 1
        })
      });
  }

  
  render() {
    return (
      <div className="app container">
        <SearchForm onSubmit={ this.submitHandler } />
        <InfiniteScroll
          className="imageList"
          dataLength={this.state.images.length}
          next={this.fetchMoreImages}
          hasMore={true}
          loader={<div></div>}
        > 
          {this.state.images.map(image =>
            <ImageCard
              key={ image.id }
              opacityDelay={ 1500 }
              blurDelay={ 2000 }
              src={ image.src.large } 
            />
          )}
        </InfiniteScroll>
      </div>
    )
  }
} 

export default App;