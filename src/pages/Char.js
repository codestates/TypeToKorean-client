import React, { Component } from 'react';

import Stat2 from '../components/Stat2';

export default class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };

    this.getData = this.getData.bind(this);
    this.getRandomDateArray = this.getRandomDateArray.bind(this);
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

  render() {
    const { data } = this.state;

    return (
      <div>
        <Stat2 data={data} title="Visits" color="#70CAD1" />
      </div>
    );
  }
}
