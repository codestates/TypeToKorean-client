import React, { Component } from 'react';
import { Card } from 'antd';

class TextToWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="textToWrite">
        항상 자신 있게 행동하라. 자신을 있는 그대로 표현하고, 스스로를 믿으며
        성공한 사람의 행동을 모방하려 하지 말라.
      </Card>
    );
  }
}

export default TextToWrite;
