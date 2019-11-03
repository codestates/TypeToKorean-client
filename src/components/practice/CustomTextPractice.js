import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Card } from 'antd';
import PracticeData from './PracticeData';
import PracticeScreen from './PracticeScreen';

export default class CustomTextPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToWrite:
        '여기는 앞으로 커스텀 텍스트를 삽입하셔서 연습할 수 있습니다.',
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
