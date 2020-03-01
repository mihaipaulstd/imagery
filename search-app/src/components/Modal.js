import React, { Component } from 'react';
import ReactModal from 'react-modal';

import ModalImage from './ModalImage'

ReactModal.setAppElement('#root');

class Modal extends Component {
  render() {
    return (
      <ReactModal 
        isOpen={ this.props.isOpen }
        contentLabel="onRequestClose"
        onRequestClose={ this.props.onClose }
        className="Modal"
        overlayClassName="Overlay"
      >
          <ModalImage
            src={
              this.props.image.src !== undefined
              ? this.props.image.src.large2x
              : '' 
            }
          />
      </ReactModal>
    )
  }
}


export default Modal;