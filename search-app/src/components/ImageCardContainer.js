import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import ImageCard from './ImageCard';

class ImageCardContainer extends Component {


  componentDidUpdate() {
    const imageContainer = document.querySelector('.imageCardContainer');
    
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
      <main className="imageCardContainer">
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
      </main>
      
    )
  }
}

export default ImageCardContainer;