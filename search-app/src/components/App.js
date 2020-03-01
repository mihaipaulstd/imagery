import React, { Component } from 'react';

import SearchForm from './SearchForm';
import ImageCardContainer from './ImageCardContainer'
import Modal from './Modal'

import pexels from '../api/pexels';

class App extends Component {
  constructor() {
    super();

    this.state = {
      per_load: 20,
      loads: 0,
      images: [],
      currentImage: {},
      currentTerm: null,
      isModalOpen: false
    };

    this.fetchImages = this.fetchImages.bind(this);
    this.setModal = this.setModal.bind(this);
    this.setCurrentImage = this.setCurrentImage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        this.setState({
          images: searchTerm || !this.state.loads ? response.data.photos : [...this.state.images, ...response.data.photos],
          loads: this.state.loads + 1,
          currentTerm: term
        })
      })
      .catch(error => { });
  }

  setModal(image) {
    this.setCurrentImage(image);
    this.openModal();
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  setCurrentImage(image) {
    this.setState({ currentImage: image })
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
          handleImagesOnClick={ this.setModal }
        />
        <Modal 
          isOpen={ this.state.isModalOpen }
          image={ this.state.currentImage }
          onClose={ this.closeModal }
        />
      </div>
    )
  }
} 

export default App;