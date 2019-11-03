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
    return (
      <Row>
        <Col span={3}>
          <SpeedDiv />
        </Col>
        <Col span={3}>
          <TypoDiv />
        </Col>
        <Col span={3}>
          <ScoreDiv />
        </Col>
      </Row>
    );
  }
}
