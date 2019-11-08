import React from 'react';
import { Button, Avatar, Typography, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import PicDiv from './PicDiv';

const { Title } = Typography;

export default function BriefInfo({ username, email, phone }) {
  return (
    <Row>
      <Row>
        <Col span={12}>
          <PicDiv />
        </Col>
        <Col span={12}>
          <Row>
            <Title level={3}>Username:{username}</Title>
          </Row>
          <Row>
            <Title level={3}>Last Login:{}</Title>
          </Row>
          <Row>
            <Title level={3}>E-Mail:{email}</Title>
          </Row>
          <Row>
            <Title level={3}>Phone:{phone}</Title>
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
