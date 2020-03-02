import React, { Component } from 'react';

class ModalImage extends Component {
  render() {
    return (
        <img
          src={ this.props.src }
          alt=""
        />
    )
  }
}


export default ModalImage;