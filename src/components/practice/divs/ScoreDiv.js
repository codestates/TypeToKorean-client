import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

export default function ScoreDiv({ score }) {
  return (
    <article className="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
      <Row gutter={16}>
        <Col div={12}>
          <Statistic title="Score" value={Math.round(score)} />
        </Col>
        <Col div={12}>
          <Statistic title="Gain" value={5227} precision={0} />
        </Col>
      </Row>
    </article>
  );
}
