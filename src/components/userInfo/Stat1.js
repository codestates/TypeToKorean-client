import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

class Stat1 extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Row gutter={[0, 48]}>
          <Title level={2}>All Time Statistics:</Title>
        </Row>
        <Row type="flex" justify="center" gutter={[0, 48]}>
          <Col span={4}>
            <Statistic title="Total Time:" value={'15:34:39'} />
          </Col>
          <Col span={4}>
            <Statistic title="Total Samples:" value={2853} />
          </Col>
          <Col span={4}>
            <Statistic title="Top Speed (WPM):" value={100} />
          </Col>
          <Col span={4}>
            <Statistic title="Average Speed (WPM):" value={68} />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Title level={2}>Statistics for Today:</Title>
        </Row>
        <Row type="flex" justify="center" gutter={[0, 48]}>
          <Col span={4}>
            <Statistic title="Total Time:" value={'00:00:00'} />
          </Col>
          <Col span={4}>
            <Statistic title="Total Samples:" value={0} />
          </Col>
          <Col span={4}>
            <Statistic title="Top Speed (WPM):" value={'N/A'} />
          </Col>
          <Col span={4}>
            <Statistic title="Average Speed (WPM):" value={'N/A'} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stat1;
