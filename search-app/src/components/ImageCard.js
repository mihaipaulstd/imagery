import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    
  }

  render() {
    return (
      <img className="imageCard" src={ this.props.src } ref={ this.imageRef } />
        
      
    )
  }

}

export default ImageCard;