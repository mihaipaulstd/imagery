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
      <input className="formInput" type="text" spellCheck="false" placeholder="Search photos and videos" value={ this.state.term } onChange={ this.onInputChange } autoFocus />
    )
  }

}

export default FormInput;