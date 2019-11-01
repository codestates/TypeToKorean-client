import React from 'react';
import { Input, Card } from 'antd';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startFullLog: [],
      endFullLog: [],
      speedFullLog: [],
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.clearLog = this.clearLog.bind(this);
    this.renderLog = this.renderLog.bind(this);

    // this.startFullLog = [];
    // this.endFullLog = [];
    // this.speedFullLog = [];

    this.count = 0;
    this.oneCharSpeed = 0;
  }

  handleEvent(event) {
    const { startFullLog, endFullLog, speedFullLog } = this.state;

    this.log = document.querySelector('.event-log-contents');
    const textToWrite = document.querySelector('.textToWrite').innerText;
    const checker = textToWrite[this.count];

    if (event.type === 'compositionstart') {
      // startFullLog.push({[event.data] : event.timeStamp}) // if arr
      // startFullLog[event.data] = event.timeStamp; // if obj

      const prevStartFullLog = startFullLog;
      prevStartFullLog.push({ [event.type]: event.timeStamp });
      this.setState(prevState => ({
        // if state
        startFullLog: prevStartFullLog,
      }));
      // startFullLog[this.textToWrite[this.count]] = event.timeStamp; // 첫번째 작성하여야 할 글자와
      console.log(startFullLog);
    }
    if (event.type === 'compositionend') {
      // endFullLog.push({[event.data] : event.timeStamp}) // if arr
      // endFullLog[event.data] = event.timeStamp; // if obj // 작성 완료된 글자를 비교
      console.log(endFullLog);

      const prevEndFullLog = endFullLog;
      prevEndFullLog.push({ [event.data]: event.timeStamp });
      this.setState(prevState => ({
        // if state
        endFullLog: prevEndFullLog,
      }));

      // this.oneCharSpeed = ${startFullLog[this.textToWrite[this.count]] - endFullLog[this.textToWrite[this.count]]}

      // console.log(
      //   `textToWrite[${this.count}] : ${this.textToWrite[this.count]} speed : `, // 한 자의 속도가 어떤지 확인
      // );
      console.log(
        `${JSON.stringify(startFullLog)}, `, // 두 글자의 속도 비교
      );
      // console.log(JSON.stringify(endFullLog))
      // this.setState(prevState => ({
      //   endFullLog: {
      //     ...prevState.endFullLog,
      //     [checker]: event.timeStamp,
      //   },
      //   speedFullLog: {
      //     ...prevState.speedFullLog,
      //     [checker]: this.oneCharSpeed,
      //   },
      // }));

      this.count += 1;
    }

    this.log.innerHTML += `${event.type}: ${event.data} timestamp: ${event.timeStamp}`;
    this.log.innerHTML += '<br>';
    if (event.type === 'compositionend' && this.oneCharSpeed) {
      this.count += 1;
      this.log.innerHTML += `oneCharSpeed : ${this.oneCharSpeed}<br>`;
      this.oneCharSpeed = 0;
    }
  }

  clearLog() {
    this.log = document.querySelector('.event-log-contents');
    this.log.innerHTML = '';
  }

  renderLog() {
    const { startFullLog, endFullLog, speedFullLog } = this.state;

    if (startFullLog.length === 0) return <span>there is no log!</span>;
    // if (endFullLog.length === 0) return <span>there is no log!</span>;
    // if (speedFullLog.length === 0) return <span>there is no log!</span>;
    return (
      <ul>
        {JSON.stringify(startFullLog)}
        {/* {endFullLog.map(value => {
          <li>{JSON.stringify(value)}</li>;
        })}
        {speedFullLog.map(value => {
          <li>{JSON.stringify(value)}</li>;
        })} */}
      </ul>
    );
  }

  render() {
    const { startFullLog, endFullLog, speedFullLog } = this.state;
    return (
      <div>
        <div className="control">
          <Input
            className="hangultype"
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
        </div>
        <div>{this.renderLog()}</div>
      </div>
    );
  }
}
