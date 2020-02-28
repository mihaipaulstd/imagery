import React, { Component } from 'react';

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    this.props.photos.map(photo => 
      <Photo />  
    )
}

  render() {
    return (
      <h2 className="imageList">
        { this.getPhotos }
      </h2>
    )
  }

}

export default ImageList;