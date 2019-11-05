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
    // this.postingResult = this.postingResult.bind(this);
  }

  scoring(speed, typo) {
    const score = (speed * 100) / ((typo + 1) * 1.3);
    this.postingResult(score, speed, typo);
    this.setState({
      speed,
      typo,
      score,
    });
    // 점수를 받아서 계산하고, state로 전부 올린다.
  }

  postingResult(score, speed, typo) {
    const { loginId, loginUserName, loginComplete } = this.props;

    const result = {
      id: loginId,
      userName: loginUserName,
      typeSpeed: speed,
      score: score,
      typo: typo,
      totaltime: '',
    };
    if (loginComplete) {
      window
        .fetch('http://localhost:5000/typeInformation/id', {
          method: 'POST',
          body: JSON.stringify(result),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }

    // post 요청을 통해 받아온 1 연습 당 데이터를 전송한다.
  }

  render() {
    const { textToWrite, score, speed, typo } = this.state;

    return (
      <div>
        <Card style={{ marginBottom: 16, marginTop: 16, textAlign: 'center' }}>
          <p>
            <PracticeData
              speed={speed}
              typo={typo}
              score={score}
              style={{ textAlign: 'center' }}
            />
          </p>
          <p>
            <PracticeScreen
              textToWrite={textToWrite}
              scoring={this.scoring}
              postingResult={this.postingResult}
            />
          </p>
        </Card>
      </div>
    );
  }
}
