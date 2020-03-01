import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input className="formInput" type="text" spellCheck="false" placeholder="Search stock photos" value={ this.state.term } onChange={ this.onInputChange } />
    )
  }

}

export default FormInput;