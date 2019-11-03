import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SpeedDiv from './divs/SpeedDiv';
import TypoDiv from './divs/TypoDiv';
import ScoreDiv from './divs/ScoreDiv';

export default class PracticeData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { speed, typo, score } = this.props;
    return (
      <Row>
        <Col span={3}>
          <SpeedDiv speed={speed} />
        </Col>
        <Col span={3}>
          <TypoDiv typo={typo} />
        </Col>
        <Col span={3}>
          <ScoreDiv score={score} />
        </Col>
      </Row>
    );
  }
}
