import React, { Component } from 'react';
import Practice from './Practice';
import ReadMe from './ReadMe';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>
          <Practice />
        </p>
        <p>
          <ReadMe />
        </p>
      </div>
    );
  }
}
