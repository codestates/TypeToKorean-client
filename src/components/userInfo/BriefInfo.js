import React from 'react';
import { Button, Avatar, Typography, Col, Row } from 'antd';
import PicDiv from './PicDiv';
import { Link } from 'react-router-dom';

const { Title } = Typography;

class BriefInfo extends React.Component {
  render() {
    return (
      <Row>
        <Row>
          <Col span={12}>
            <PicDiv />
          </Col>
          <Col span={12}>
            <Row>
              <Title level={3}>Username:{}</Title>
            </Row>
            <Row>
              <Title level={3}>Last Login:{}</Title>
            </Row>
            <Row>
              <Title level={3}>E-Mail:{}</Title>
            </Row>
            <Row>
              <Title level={3}>Phone:{}</Title>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button type="primary">Edit</Button>
          </Col>
          <Col span={12}>
            <Link to="/signout">
              <Button type="primary">Signout</Button>
            </Link>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default BriefInfo;
