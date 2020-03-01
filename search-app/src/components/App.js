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

  componentDidMount() {
    this.fetchImages();
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
              key={ image.id }
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
                  ? this.state.currentImage.src.large2x
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