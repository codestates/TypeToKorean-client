import React, { Component } from 'react';
import OneSentencePractice from '../components/practice/ShortSentencePractice';
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
          <OneSentencePractice />
        </p>
        <p>
          <ReadMe />
        </p>
      </div>
    );
  }
}
