import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    
  }


  render() {
    return (
      <img className="photo" src={ this.props.src } />
        
      
    )
  }

}

export default Photo;