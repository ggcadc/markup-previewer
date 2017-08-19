import React, { Component } from 'react';


class OutputBox extends Component {
  render() {

    return (
      <div dangerouslySetInnerHTML={{__html: this.props.result}}></div>
  )
  }
}

export default OutputBox;
