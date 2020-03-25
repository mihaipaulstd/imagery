import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";

import { closeModal } from "../actions/closeModal";
import ModalImage from "./ModalImage";
import ModalNavigation from "./ModalNavigation";

ReactModal.setAppElement("#root");

const Modal = ({ closeModal, isModalOpen, image }) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    className="Modal"
    overlayClassName="Overlay"
  >
    <ModalImage />
    


    <ModalNavigation />
  </ReactModal>
);

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen,
  image: state.modalImage
});

export default connect(mapStateToProps, { closeModal })(Modal);
