import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

export default function TypoDiv({ typo }) {
  return (
    <Row>
      <Col>
        <Statistic title="Typo" value={typo} />
      </Col>
      <Col>
        <Statistic title="Gain" value={5227} precision={0} />
      </Col>
    </Row>
  );
}
