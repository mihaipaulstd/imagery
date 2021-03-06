import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { openModal } from "../actions/openModal";

const ImageCard = ({ image, opacityDelay, openModal }) => {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpaque(true);
    }, opacityDelay);
  }, [opacityDelay]);

  return (
    <div
      className={`imageCard${isOpaque ? "" : " hidden"}`}
      onClick={() => {
        openModal(image);
      }}
    >
      <img src={image && image.urls.regular} alt="" />
    </div>
  );
};

const mapStateToProps = state => ({
  modalImage: state.modalImage
});

export default connect(mapStateToProps, { openModal })(ImageCard);
