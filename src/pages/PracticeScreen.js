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
    return (
      <Card>
        <TextToWrite />
        <InputText />
      </Card>
    );
  }
}
