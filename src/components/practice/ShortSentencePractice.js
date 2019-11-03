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
      speed: 0,
      typo: 0,
      score: 0,
    };

    this.scoring = this.scoring.bind(this);
    this.fetchingText = this.fetchingText.bind(this);
  }

  scoring(speed, typo) {
    const score = (speed * 100) / (typo * 1.3);
    this.setState({
      speed,
      typo,
      score,
    });
    // 점수를 받아서 계산하고, state로 전부 올린다.
  }

  fetchingText() {
    // get 요청을 통해 서버로 부터 테스트를 받아온다.
  }

  render() {
    const { textToWrite, score, speed, typo } = this.state;

    return (
      <div>
        <Card style={{ width: 900, marginBottom: 16, marginTop: 16 }}>
          <p>
            <PracticeData speed={speed} typo={typo} score={score} />
          </p>
          <p>
            <PracticeScreen
              textToWrite={textToWrite}
              scoring={this.scoring}
              fetchingText={this.fetchingText}
            />
          </p>
        </Card>
      </div>
    );
  }
}
