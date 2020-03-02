import React, { Component } from 'react';
import imagesLoaded from 'imagesloaded';

import SearchForm from './SearchForm';
import ImageCardContainer from './ImageCardContainer'
import Modal from './Modal'



import pexels from '../api/pexels';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      per_load: 20,
      loads: Math.floor(Math.random() * 300),
      images: [],
      currentTerm: null
    };


    this.modal = React.createRef();

    this.fetchImages = this.fetchImages.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages(searchTerm) {
    const term = searchTerm || this.state.currentTerm;
    
    pexels.get(term ? '/v1/search' : '/v1/curated', {
      params: {
        query: term ? term : '',
        per_page: this.state.per_load,
        page: this.state.loads + 1
      }
    })
      .then(response => {
        imagesLoaded(document.querySelector('.imageCardContainer'), () => {
          this.setState({
            images: searchTerm || this.state.loads === 0 ? response.data.photos : [...this.state.images, ...response.data.photos],
            loads: !response.data.photos.length ? 0 : this.state.loads + 1,
            currentTerm: term
          })
        }
    )
        
      })
      .catch(error => { });
  }

  openModal(image) {
    this.modal.current.open(image);
  }

  render() {
    return (
      <div className="App container">
        <SearchForm
          onSubmit={ this.fetchImages }
        />
        <ImageCardContainer
          dataLength={ this.state.images.length }
          scrollFetchHandler={ this.fetchImages }
          images={ this.state.images }
          handleImagesOnClick={ this.openModal }
        />
        <Modal
          ref={ this.modal }
        />
      </div>
    )
  }
} 

export default App;