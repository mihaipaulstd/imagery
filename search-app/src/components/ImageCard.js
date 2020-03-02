import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpaque: false,
      image: {}
    };

    this.imageRef = React.createRef();

    this.setSelf = this.setSelf.bind(this);
    this.setOpaque = this.setOpaque.bind(this);
    this.onClick = this.onClick.bind(this);

  }

  

  componentDidMount() {
    this.setSelf();
    this.setOpaque();
    this.onClick();
    
  }

  setSelf() {
    this.setState({
      image: this.props.image
    })
  }
  
  setOpaque() {
    setTimeout( async () => {
      this.setState({
        isOpaque: true
      })
    }, this.props.opacityDelay);
  }

  onClick() {
    this.imageRef.current.addEventListener('click', () => {
      this.props.handleImagesOnClick(this.state.image);
    });
  }

  render() {
    return (
      <div
        className={`imageCard${this.state.isOpaque ? '' : ' hidden'}`}
      >
        <img
          src={ this.props.image.src.large }
          ref={ this.imageRef }
          alt=""
        />
      </div>
    )
  }

}

export default ImageCard;