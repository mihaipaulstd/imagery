import React from 'react';
import { connect } from 'react-redux';

const ModalImage = ({ modalImage }) => 
  <img
    src={ modalImage.src.original }
    alt=""
  />

const mapStateToProps = state => ({
  modalImage: state.modalImage
})

export default connect(mapStateToProps)(ModalImage);