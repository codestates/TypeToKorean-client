import React, { Component } from 'react';
import { Row, Col, Button, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Long from './pages/Long';
import Custom from './pages/Custom';
import UserInfo from './pages/UserInfo';
import Login from './components/login/Login';
// import Menu from './components/Menu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Row>
            <Col span={16}>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/long">
                  <Long />
                </Route>
                <Route path="/custom">
                  <Custom />
                </Route>
                <Route path="/info">
                  <UserInfo />
                </Route>
              </Switch>
            </Col>

            <Col span={8}>
              <Login />
              <Menu
                onClick={this.handleClick}
                style={{ width: 400 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <Menu.Item key="1">
                  <Link exact to="/">
                    짧은 글 연습
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/long">긴 글 연습</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/custom">커스텀 글 연습</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/info">회원정보</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Router>
      </div>
    );
  }
}
// Main, Char, Word에 다른 prop를 내려줘서

// <Link to="/">
// <Button>Main</Button>
// </Link>
// <Link to="/char">
// <Button>Char</Button>
// </Link>
// <Link to="/word">
// <Button>Word</Button>
// </Link>
