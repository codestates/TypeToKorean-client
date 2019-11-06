import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Card } from 'antd';
import PracticeData from './PracticeData';
import PracticeScreen from './PracticeScreen';

export default class LongSentencesPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToWrite: '강의 위주의 주입식 교육이 아닌 검증된 커리큘럼과 체계적인 스케줄에 따라 학습하고, 새로운 기술이나 문제들이 발생해도 스스로 해결할 수 있는 능력을 키우는 학습 커뮤니티입니다. 미국 실리콘밸리 뿐만 아니라 한국에서도 직접 현지화하고 검증한 커리큘럼을 기반으로 진행되는맞춤형 프로그램을 통해 소프트웨어 엔지니어, 데이터 사이언티스트, 창업가 등의 새로운 커리어를 시작하세요.'.normalize(
        'NFD',
      ),
      textToWriteNotNormalized:
        '강의 위주의 주입식 교육이 아닌 검증된 커리큘럼과 체계적인 스케줄에 따라 학습하고, 새로운 기술이나 문제들이 발생해도 스스로 해결할 수 있는 능력을 키우는 학습 커뮤니티입니다. 미국 실리콘밸리 뿐만 아니라 한국에서도 직접 현지화하고 검증한 커리큘럼을 기반으로 진행되는맞춤형 프로그램을 통해 소프트웨어 엔지니어, 데이터 사이언티스트, 창업가 등의 새로운 커리어를 시작하세요.',
      totaltime: 0,
      speed: 0,
      typo: 0,
      score: 0,
    };

    this.scoring = this.scoring.bind(this);
    this.postingResult = this.postingResult.bind(this);
  }

  scoring(speed, typo, totaltime) {
    const score = (speed * 100) / ((typo + 1) * 1.3);
    this.postingResult(speed, typo, totaltime, score);
    this.setState({
      totaltime,
      speed,
      typo,
      score,
    });
    // 점수를 받아서 계산하고, state로 전부 올린다.
  }

  postingResult(speed, typo, totaltime, score) {
    // 서버로 보내는 부분이 camelCase가 안되있다.
    const { loginId, loginUserName, loginComplete } = this.props;

    const result = {
      typeSpeed: speed,
      score,
      typo,
      totaltime,
    };

    // if (loginComplete) {
    window
      .fetch('http://localhost:5000/typeInformation/id', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .catch(err => console.log(err));
    // }
    // post 요청을 통해 받아온 1 연습 당 데이터를 전송한다.
  }

  render() {
    const {
      textToWrite,
      textToWriteNotNormalized,
      score,
      speed,
      typo,
    } = this.state;

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
              textToWriteNotNormalized={textToWriteNotNormalized}
            />
          </p>
        </Card>
      </div>
    );
  }
}
