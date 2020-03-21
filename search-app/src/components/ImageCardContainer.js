import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import { fetchImages } from '../actions/fetchImages';
import ImageCard from './ImageCard';

const ImageCardContainer = ({ images, fetchImages }) => {
  
  useEffect(() => {
    const imageCardContainer = document.querySelector('.imageCardContainer');
    imagesLoaded(imageCardContainer, () => 
      new Masonry(imageCardContainer, {
        itemSelector: '.imageCard',
        columnWidth: '.imageCardSizer',
        percentPosition: true
      }).layout()
    )
  })
  const renderCardSizer = () => <div className="imageCardSizer" />

  const renderImages = () => images.map((image, index) =>
    <ImageCard
      key={ image.id }
      opacityDelay={ 15 * index }
      image={ image }
      
    />
  )


  return (
    <main
      className="imageCardContainer"
    >
      <InfiniteScroll
        dataLength={ images.length }
        next={ fetchImages }
        scrollThreshold={ 0.8 }
        hasMore={ true }
        loader={ <div /> }
      >
        { renderCardSizer() }
        { renderImages() }
      </InfiniteScroll>
    </main>
  )
}

const mapStateToProps = (state) => ({
  images: state.images,
  modalImage: state.modalImage
})

export default connect(mapStateToProps, { fetchImages })(ImageCardContainer);