import React, { Component } from 'react';
import { Card } from 'antd';

import TextToWrite from '../components/TextToWrite';
import InputText from '../components/InputText';

export default class PracticeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { textToWrite } = this.props;
    return (
      <Card>
        <TextToWrite textToWrite={textToWrite} />
        <InputText textToWrite={textToWrite} />
      </Card>
    );
  }
}
