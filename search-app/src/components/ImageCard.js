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

  }

  componentDidMount() {
    setTimeout(() => {
      this.show();
    }, this.props.opacityDelay)

    setTimeout(() => {
      this.focus();
    }, this.props.blurDelay)
  }

  show() {
    this.setState({ hidden: false })
  }

  focus() {
    this.setState({ blurred: false })
  }


  render() {
    return (
        <div className={`imageCard ${this.state.hidden ? 'hidden' : ''} ${this.state.blurred ? 'blurred' : ''}`}>
          <img
            src={ this.props.src }
            ref={ this.imageRef } 
          />
        </div>
    )
  }

}

export default ImageCard;