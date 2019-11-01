import React from 'react';
import { Input, Card } from 'antd';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startFullLog: [],
      endFullLog: [],
      speedFullLog: [],
      count: 0,
      CPM: 0,
      typoCount: 0,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.clearLog = this.clearLog.bind(this);
    this.renderLog = this.renderLog.bind(this);
    this.checkSpeed = this.checkSpeed.bind(this);
    // this.checkTypo = this.checkTypo.bind(this);
  }

  handleEvent(event) {
    const { startFullLog, endFullLog, speedFullLog, count, CPM } = this.state;

    this.log = document.querySelector('.event-log-contents');
    const textToWrite = document.querySelector('.textToWrite').innerText;
    const inputType = document.querySelector('.inputType').value;

    const checker = textToWrite[count];

    if (event.type === 'compositionstart') {
      const prevStartFullLog = startFullLog;
      prevStartFullLog.push({ [count]: event.timeStamp });
      this.setState(prevState => ({
        startFullLog: prevStartFullLog,
      }));
      // console.log(startFullLog);
    }
    if (event.type === 'compositionend') {
      // console.log(endFullLog);

      const prevEndFullLog = endFullLog;
      prevEndFullLog.push({ [event.data]: event.timeStamp });
      console.log('start', startFullLog[count][count]);
      const prevSpeedFullLog = speedFullLog;
      prevSpeedFullLog.push(event.timeStamp - startFullLog[count][count]);

      this.setState(prevState => ({
        endFullLog: prevEndFullLog,
        speedFullLog: prevSpeedFullLog,
        count: count + 1,
      }));

      const speed =
        textToWrite.length * (60000 / speedFullLog.reduce((a, b) => a + b));

      if (textToWrite.length === inputType.length) {
        this.setState({
          CPM: speed,
        });
        console.log('avg speed', speed);
        console.log('sum speed', speedFullLog.reduce((a, b) => a + b));
        // 여기서 오타 잡는 함수 실행
      }
      console.log('textToWrite', textToWrite.length);
      console.log('inputType', inputType.length);

      this.log.innerHTML += `oneCharSpeed : ${speedFullLog[count]}<br>`;
    }
    // this.log.innerHTML += `${event.type}: ${event.data} timestamp: ${event.timeStamp}`;
    // this.log.innerHTML += '<br>';
  }

  // checkTypo() {
  //   const textToWrite = document.querySelector('.textToWrite').innerText;
  //   const inputType = document.querySelector('.inputType').value;
  //   const textToWriteArray = textToWrite.split('');
  //   const inputTypeArray = inputType.split('');

  //   for (let i = 0; i < textToWriteArray.length; i += 1) {
  //     let count = 0;
  //     if (textToWriteArray[i] !== inputTypeArray[i]) {
  //       count += 1;
  //     }
  //   }

  //   this.setState({
  //     typoCount: count,
  //   });
  // }

  clearLog() {
    this.log = document.querySelector('.event-log-contents');
    this.log.innerHTML = '';
  }

  renderLog() {
    const { startFullLog, endFullLog, speedFullLog } = this.state;

    if (startFullLog.length === 0) return <span>there is no log!</span>;
    if (endFullLog.length === 0) return <span>there is no log!</span>;
    // if (speedFullLog.length === 0) return <span>there is no log!</span>;
    return (
      <ul>
        {JSON.stringify(startFullLog)}
        {JSON.stringify(endFullLog)}
        {JSON.stringify(speedFullLog)}
      </ul>
    );
  }

  checkSpeed() {
    const { CPM } = this.state;
    console.log(CPM);
  }

  render() {
    // const { startFullLog, endFullLog, speedFullLog } = this.state;
    return (
      <div>
        <div className="control">
          <Input
            className="inputType"
            onCompositionStart={this.handleEvent}
            onCompositionUpdate={this.handleEvent}
            onCompositionEnd={this.handleEvent}
          />
        </div>

        <div className="event-log">
          <testarea readOnly className="event-log-contents" cols="50" />
          <button className="clear-log" onClick={this.clearLog}>
            Clear
          </button>
          <textarea
            readOnly
            className="event-log-contents"
            rows="8"
            cols="25"
          />
          <button onClick={this.checkSpeed}>check speed</button>
        </div>
        <div>{this.renderLog()}</div>
      </div>
    );
  }
}
