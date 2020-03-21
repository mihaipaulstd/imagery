import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { openModal } from '../actions/openModal';

const ImageCard = ({ image, opacityDelay, openModal }) => {
  
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    setOpaque();
  }, []);
  
  const setOpaque = () => {
    setTimeout(() => {
      setIsOpaque(true);
    }, opacityDelay);
  }
  
  return (
    <div
      className={`imageCard${isOpaque ? '' : ' hidden'}`}
      onClick={
        // e => console.log(image)
        () => {
          openModal(image);
        }
      }
    >
      <img src={image.src.large} alt=""/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  modalImage: state.modalImage
})

export default connect(mapStateToProps, { openModal })(ImageCard);