import React from "react";
import { connect } from "react-redux";

const ModalImage = ({ modalImage }) => (
  <img src={modalImage && modalImage.urls.raw} alt="" />
);

const mapStateToProps = state => ({
  modalImage: state.modalImage
});

export default connect(mapStateToProps)(ModalImage);
