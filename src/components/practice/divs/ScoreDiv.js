import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

export default function ScoreDiv({ score }) {
  return (
    <Row>
      <Col>
        <Statistic title="Score" value={Math.round(score)} />
      </Col>
      <Col>
        <Statistic title="Gain" value={5227} precision={0} />
      </Col>
    </Row>
  );
}
