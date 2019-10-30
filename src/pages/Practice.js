import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Card } from 'antd';
import PracticeData from './PracticeData';
import PracticeScreen from './PracticeScreen';

export default class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card style={{ width: 900, marginBottom: 16, marginTop: 16 }}>
          <p>
            <PracticeData />
          </p>
          <p>
            <PracticeScreen />
          </p>
        </Card>
      </div>
    );
  }
}
