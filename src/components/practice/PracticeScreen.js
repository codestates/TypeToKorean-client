import React, { Component } from 'react';
import { Card } from 'antd';

import TextToWrite from './divs/TextToWrite';
import InputText from './divs/InputText';

export default class PracticeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { textToWrite, scoring, postingResult } = this.props;
    return (
      <Card>
        <TextToWrite textToWrite={textToWrite} />
        <InputText
          textToWrite={textToWrite}
          scoring={scoring}
          postingResult={postingResult}
        />
      </Card>
    );
  }
}
