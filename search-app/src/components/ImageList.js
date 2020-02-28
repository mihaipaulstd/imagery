import React, { Component } from 'react';

import Photo from './Photo';

class ImageList extends Component {
  constructor(props) {
    super(props);
    
    this.getPhotos = this.getPhotos.bind(this);
    
  }

  getPhotos() {
    return this.props.photos.map(photo => 
      <Photo key={ photo.id } src={ photo.src.large } />  
    )
  }

  render() {
    return (
      <div className="imageList">
        { this.getPhotos() }
      </div>
    )
  }

}

export default ImageList;