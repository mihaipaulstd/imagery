import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import ReactModal from 'react-modal';

import ImageCard from './ImageCard';
import SearchForm from './SearchForm';

import pexels from '../api/pexels';

ReactModal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      per_load: 30,
      loads: 1,
      images: new Array(),
      currentImage: new Object(),
      currentTerm: null,
      showModal: false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.fetchImagesOnScroll = this.fetchImagesOnScroll.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidUpdate() {
    const imageContainer = document.querySelector('.imageContainer');
    
    imagesLoaded(imageContainer, () => 
      new Masonry(imageContainer, {
        itemSelector: '.imageCard',
        columnWidth: '.imageCardSizer',
        percentPosition: true
      }).layout()
    )
  }

  submitHandler(term) {
    pexels.get('/v1/search', {
      params: {
        query: term,
        per_page: this.state.per_load,
        page: this.state.loads
      }
    })
      .then(object => {
        this.setState({
          images: object.data.photos,
          currentTerm: term
        })
      });
  }
  
  fetchImagesOnScroll() {
    pexels.get('/v1/search', {
      params: {
        query: this.state.currentTerm,
        per_page: this.state.per_load,
        page: this.state.loads + 1
      }
    })
      .then(object => {
        this.setState({
          // images: this.state.images.concat(object.data.photos),
          images: [...this.state.images, ...object.data.photos],
          loads: this.state.loads + 1
        })
      });
  }

  handleOpenModal({ imageProperties }) {
    this.setState({
      showModal: true,
      currentImage: imageProperties
    })

  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="app container">
        <SearchForm onSubmit={ this.submitHandler } />
        <InfiniteScroll
          className="imageContainer"
          dataLength={ this.state.images.length }
          next={ this.fetchImagesOnScroll }
          scrollThreshold={ 0.7 }
          hasMore={ true }
          loader={ <div /> }
        >

          <div className="imageCardSizer"></div>

          {this.state.images.map((image, index) =>
            <ImageCard
              key={ image.id }
              opacityDelay={ 50 * index }
              src={ image.src.large }
              imageProperties={ image }
              triggerModal={ this.handleOpenModal }
            />
          )}

          <ReactModal 
            isOpen={ this.state.showModal }
            contentLabel="onRequestClose"
            onRequestClose={ this.handleCloseModal }
            className="Modal"
            overlayClassName="Overlay"
          >
              <img
                src={
                  typeof this.state.currentImage.src !== 'undefined'
                  ? this.state.currentImage.src.original
                  : '' 
                }
              >
              </img>
          </ReactModal>
        </InfiniteScroll>
      </div>
    )
  }
} 

export default App;