import React, { Component } from 'react';

import ImageCard from './ImageCard';

class ImageList extends Component {
  constructor(props) {
    super(props);
    
    this.getImages = this.getImages.bind(this);
    
  }

  getImages() {
    return this.props.images.map((image, index) =>
      <ImageCard key={ image.id } delay={ index * 30 } src={ image.src.large } />  
    )
  }

  render() {
    return (
      <div className="imageList">
        { this.getImages() }
      </div>
    )
  }

}

export default ImageList;