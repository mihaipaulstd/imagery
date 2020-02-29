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
    this.hide = this.hide.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.triggerModal = this.triggerModal.bind(this);

  }

  componentDidMount() {
    setTimeout(() => {
      this.show();
    }, this.props.opacityDelay)

    setTimeout(() => {
      this.focus();
    }, this.props.blurDelay)

    this.imageRef.current.addEventListener('click', this.triggerModal);

  }

  show() {
    this.setState({ hidden: false })
  }

  hide() {
    this.setState({ hidden: true })
  }

  focus() {
    this.setState({ blurred: false })
  }

  blur() {
    this.setState({ blurred: true })
  }

  triggerModal() {
    this.props.triggerModal({ imageProperties: this.props.imageProperties });
    
  }


  render() {
    return (
        <div className={`imageCard ${this.state.hidden ? 'hidden' : ''} ${this.state.blurred ? 'blurred' : ''}`}>
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