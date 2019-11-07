import React, { Component } from 'react';
import BriefInfo from '../components/userInfo/BriefInfo';
import Stat1 from '../components/userInfo/Stat1';
import Stat2 from '../components/userInfo/Stat2';
import { Card } from 'antd';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
      userInfo: '',
    };

    this.getData = this.getData.bind(this);
    this.getRandomDateArray = this.getRandomDateArray.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 5000);
  }

  getData() {
    this.data = [];

    this.data.push({
      title: 'Visits',
      data: this.getRandomDateArray(20),
    });

    return this.data;
  }

  getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    this.names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.data = [];
    this.baseTime = new Date('2018-05-01T00:00:00').getTime();
    this.dayMs = 24 * 60 * 60 * 1000;
    for (let i = 0; i < numItems; i += 1) {
      this.data.push({
        label: this.names[i],
        value: Math.round(20 + 80 * Math.random()),
      });
    }
    return this.data;
  }

  getUserInfo() {
    fetch('http://localhost:5000/users/id')
      .then(res => res.json())
      .then(json => {
        this.setState({
          userInfo: json,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Card style={{ marginBottom: 16, marginTop: 16 }}>
        <BriefInfo />
        <br />
        <Stat1 />
        <br />
        <Stat2 Stat2 data={data} title="Visits" color="#70CAD1" />
      </Card>
    );
  }
}

export default UserInfo;
