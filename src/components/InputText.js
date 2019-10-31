import React from 'react';
import { Input, Card } from 'antd';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startFullLog: {},
      endFullLog: {},
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.clearLog = this.clearLog.bind(this);
  }

  handleEvent(event) {
    const { startFullLog, endFullLog } = this.state;

    // this.startLog = {};
    // this.endLog = {};
    this.count = 0;
    this.oneCharSpeed = 0;
    this.log = document.querySelector('.event-log-contents');
    const textToWrite = document.querySelector('.textToWrite').innerText;
    const checker = textToWrite[this.count];

    if (event.type === 'compositionstart') {
      this.setState(prevState => ({
        startFullLog: {
          ...prevState.startFullLog,
          [checker]: event.timeStamp,
        },
      }));
      // startFullLog[this.textToWrite[this.count]] = event.timeStamp; // 첫번째 작성하여야 할 글자와
      console.log(startFullLog);
    }
    if (event.type === 'compositionend') {
      endFullLog[event.data] = event.timeStamp; // 작성 완료된 글자를 비교
      console.log(endFullLog);
      this.oneCharSpeed =
        startFullLog[this.textToWrite[this.count]] -
        endFullLog[this.textToWrite[this.count]];
      console.log(
        `textToWrite[${this.count}] : ${this.textToWrite[this.count]} speed : ${
          this.oneCharSpeed
        }`, // 한 자의 속도가 어떤지 확인
      );
      console.log(
        `${JSON.stringify(startFullLog)}, ${JSON.stringify(endFullLog)}`, // 두 글자의 속도 비교
      );
      this.count += 1;
    }

    // if (this.textToWrite[this.count] === endFullLog[event.data]) {
    // }

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

  render() {
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
        </div>
      </div>
    );
  }
}

// <textarea
// readOnly
// className="event-log-contents"
// rows="8"
// cols="25"
// />
