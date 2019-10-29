import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'this is test page',
    };
  }

  render() {
    const { data } = this.state;

    return <div>{data}</div>;
  }
}

export default App;
