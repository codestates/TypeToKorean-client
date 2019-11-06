import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

class Stat1 extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Title level={3}>All Time Statistics:</Title>
        </Row>
        <Row>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Total Time:" value={'15:34:39'} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Total Samples:" value={2853} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Top Speed (WPM):" value={100} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Average Speed (WPM):" value={68} />
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Title level={3}>Statistics for Today:</Title>
        </Row>
        <Row>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Total Time:" value={'00:00:00'} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Total Samples:" value={0} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Top Speed (WPM):" value={'N/A'} />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={16}>
              <Col div={12}>
                <Statistic title="Average Speed (WPM):" value={'N/A'} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Stat1;
