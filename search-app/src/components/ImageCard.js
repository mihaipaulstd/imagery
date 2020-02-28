import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div >
        <img className="imageCard" src={ this.props.src } />
      </div>
        
      
    )
  }

}

export default ImageCard;