import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Char from './pages/Char';
import Word from './pages/Word';
import Login from './components/login/Login';
import Menu from './components/Menu';

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
                <Route path="/char">
                  <Char />
                </Route>
                <Route path="/word">
                  <Word />
                </Route>
              </Switch>
            </Col>

            <Col span={8}>
              <Login />
              <Menu />
              <Link to="/">
                <Button>Main</Button>
              </Link>
              <Link to="/char">
                <Button>Char</Button>
              </Link>
              <Link to="/word">
                <Button>Word</Button>
              </Link>
            </Col>
          </Row>
        </Router>
      </div>
    );
  }
}
// Main, Char, Word에 다른 prop를 내려줘서
