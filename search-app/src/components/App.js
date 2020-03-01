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
      per_load: 20,
      loads: 0,
      images: [],
      currentImage: {},
      currentTerm: null,
      showModal: false
    };
    this.fetchImages = this.fetchImages.bind(this);
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

  fetchImages(searchTerm) {
    pexels.get('/v1/search', {
      params: {
        query: searchTerm || this.state.currentTerm,
        per_page: this.state.per_load,
        page: this.state.loads + 1
      }
    })
      .then(object => {
        this.setState({
          images: searchTerm ? object.data.photos : [...this.state.images, ...object.data.photos],
          loads: this.state.loads + 1,
          currentTerm: searchTerm || this.state.currentTerm
        })
      })
      .catch(error => { });
  }

  handleOpenModal({ image }) {
    this.setState({
      showModal: true,
      currentImage: image
    })
    document.querySelector('.Overlay').classList.toggle('backdropBlurred');
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    document.querySelector('.Overlay').classList.toggle('backdropBlurred');
  }

  

  render() {
    return (
      <div className="App container">
        <SearchForm onSubmit={ this.fetchImages } />
        <InfiniteScroll
          className="imageContainer"
          dataLength={ this.state.images.length }
          next={ this.fetchImages }
          scrollThreshold={ 0.8 }
          hasMore={ true }
          loader={ <div /> }
        >

          <div className="imageCardSizer"></div>

          {this.state.images.map((image, index) =>
            <ImageCard
              key={ imagesLoaded.id }
              opacityDelay={ 15 * index }
              src={ image.src.large }
              image={ image }
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
                  this.state.currentImage.src !== undefined
                  ? this.state.currentImage.src.original
                  : '' 
                }
                alt=""
              >
              </img>
          </ReactModal>
        </InfiniteScroll>
      </div>
    )
  }
} 

export default App;