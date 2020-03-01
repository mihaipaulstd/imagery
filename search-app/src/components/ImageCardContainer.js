import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import ImageCard from './ImageCard';

class ImageCardContainer extends Component {


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

  render() {
    return (
      <div className="imageContainer">
        <InfiniteScroll
          dataLength={ this.props.dataLength }
          next={ this.props.scrollFetchHandler }
          scrollThreshold={ 0.8 }
          hasMore={ true }
          loader={ <div /> }
        >

        <div className="imageCardSizer"></div>

        {this.props.images.map((image, index) =>
          <ImageCard
            key={ image.id }
            opacityDelay={ 15 * index }
            src={ image.src.large }
            image={ image }
            handleImagesOnClick={ this.props.handleImagesOnClick }
          />
        )}
      </InfiniteScroll>
      </div>
      
    )
  }
}

export default ImageCardContainer;