import React, { Component } from 'react';
import ReactModal from 'react-modal';

import ModalImage from './ModalImage'

ReactModal.setAppElement('#root');

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      image: undefined
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }


  open(image) {
    this.setState({
      isOpen: true,
      image: image
    });
  }
  
  close() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <ReactModal 
        isOpen={ this.state.isOpen }
        contentLabel="onRequestClose"
        onRequestClose={ this.close }
        className="Modal"
        overlayClassName={ `Overlay${this.state.isOpen ? ' backdropBlurred' : '' }` }
      >
        <ModalImage
          src={
            this.state.image
            ? this.state.image.src.large2x
            : '' 
          }
          alt=""
        />
      </ReactModal>
    )
  }
}


export default Modal;