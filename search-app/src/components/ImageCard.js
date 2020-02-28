import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden: true };

    this.imageRef = React.createRef();

    this.show = this.show.bind(this);

  }

  componentWillMount() {
    setTimeout(() => {
      this.show();
    }, this.props.delay)
  }

  show() {
    this.setState({ hidden: false })
  }

  // componentDidMount() {
  //   this.imageRef.current.addEventListener('load', e => {
  //     e.target.value
  //   })
  // }

  render() {
    return (

      <div >
        <img className={`imageCard ${this.state.hidden ? 'hidden' : ''}`} src={ this.props.src } ref={ this.imageRef } />
      </div>
        
    )
  }

}

export default ImageCard;