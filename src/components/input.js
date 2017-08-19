import React, { Component } from 'react';

class InputBox extends Component {
  render() {
    return (
    <div>
      <textarea id="inputText" rows="50" cols="50" value={this.props.inputState} onChange={this.props.inputUpdate} />
    </div>
  )}
}
export default InputBox;
