import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Card } from 'antd';
import PracticeData from './PracticeData';
import PracticeScreen from './PracticeScreen';

export default class ShortSentencePractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToWrite: '소소하지만 확실한 행복.',
    };
  }

  render() {
    const { textToWrite } = this.state;

    return (
      <div>
        <Card style={{ width: 900, marginBottom: 16, marginTop: 16 }}>
          <p>
            <PracticeData />
          </p>
          <p>
            <PracticeScreen textToWrite={textToWrite} />
          </p>
        </Card>
      </div>
    );
  }
}
