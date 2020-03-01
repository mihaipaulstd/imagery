import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      blurred: true
    };

    this.imageRef = React.createRef();

    this.show = this.show.bind(this);
    this.triggerModal = this.triggerModal.bind(this);

  }

  componentDidMount() {
    setTimeout(() => {
      this.show();
    }, this.props.opacityDelay)

    this.imageRef.current.addEventListener('click', this.triggerModal);

  }

  show() {
    this.setState({ hidden: false })
  }


  triggerModal() {
    this.props.triggerModal({ imageProperties: this.props.imageProperties });
    
  }


  render() {
    return (
        <div className={ `imageCard ${this.state.hidden ? 'hidden' : '' }`}>
          <img
            src={ this.props.src }
            ref={ this.imageRef }
            alt=""
          />
        </div>
    )
  }

}

export default ImageCard;