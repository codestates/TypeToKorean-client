import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

export default function SpeedDiv({ speed }) {
  return (
    <Row>
      <Col>
        <Statistic title="Speed" value={Math.round(speed)} />
      </Col>
      <Col>
        <Statistic title="Gain" value={5227} precision={0} />
      </Col>
    </Row>
  );
}
