import React, { Component } from 'react';
import { Card } from 'antd';

class TextToWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { textToWrite } = this.props;
    return <Card className="textToWrite">{textToWrite}</Card>;
  }
}

export default TextToWrite;
