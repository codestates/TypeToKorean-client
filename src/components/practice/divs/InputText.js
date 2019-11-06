import React from 'react';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedCheckArray: [],
      inputLength: 0,
      count: 0,
      speed: 0,
      typo: 0,
      inputValue: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.clearLog = this.clearLog.bind(this);
    this.callNextText = this.callNextText.bind(this);
    this.handleSpace = this.handleSpace.bind(this);
    // this.clearInput = this.clearInput.bind(this);
  }

  async handleEvent(event) {
    const {
      speedCheckArray,
      inputLength,
      count,
      speed,
      typo,
      inputValue,
    } = this.state;
    const { textToWrite, textToWriteNotNormalized, scoring } = this.props;

    this.setState({ inputValue: event.target.value });

    this.log = document.querySelector('.event-log-contents');

    const inputType = document
      .querySelector('.inputType')
      .value.normalize('NFD');
    const inputTypeNotNormalized = document.querySelector('.inputType').value;

    if (event.keyCode === 27) {
      this.setState({
        speedCheckArray: [],
        count: 0,
        speed: 0,
        typo: 0,
      });
      document.querySelector('.inputType').value = null;
    }

    if (event.type === 'keydown') {
      speedCheckArray.push(event.timeStamp);
      this.setState(prevState => ({
        speedCheckArray,
      }));
    }

    if (textToWriteNotNormalized.length === inputTypeNotNormalized.length) {
      const totalTime =
        speedCheckArray[speedCheckArray.length - 1] - speedCheckArray[0];

      const KPM = textToWrite.length * (60000 / totalTime); // 속도 계산

      // 여기서 오타 잡는 함수 실행
      const checkTypo = (text, input) => {
        let result = 0;
        for (let i = 0; i < input.length; i += 1) {
          if (text[i] !== input[i]) {
            result += 1;
          }
        }
        return result;
      };
      const newTypo = checkTypo(
        textToWriteNotNormalized,
        inputTypeNotNormalized,
      );

      scoring(KPM, newTypo, totalTime);

      this.setState(prevState => ({
        typo: newTypo,
      }));

      console.log('TypoCount', typo);
      console.log('KPM', KPM);
      console.log('inputLength', inputLength);
      console.log('speed', speedCheckArray);
    }

    // if (textToWriteNotNormalized.length + 1 === inputTypeNotNormalized.length) {
    //   if (event.type === 'keydown') {
    //     if (event.keyCode === 13 || event.keyCode === 32) {
    //       console.log('enter, space working');
    //       await this.setState({
    //         speedCheckArray: [],
    //         count: 0,
    //         speed: 0,
    //         typo: 0,
    //         inputValue: '',
    //       });
    //       // event.persist();
    //       document.querySelector('.inputType').value = '';
    //       // event.target.value = '';
    //     }
    //   }
    // }

    // if (textToWriteNotNormalized.length === inputTypeNotNormalized.length) {

    // }
  }

  async handleSpace(event) {
    const { textToWriteNotNormalized, getTextToWrite } = this.props;
    const inputTypeNotNormalized = document.querySelector('.inputType').value;

    if (textToWriteNotNormalized.length + 1 === inputTypeNotNormalized.length) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        console.log('enter, space working');
        await this.setState({
          speedCheckArray: [],
          count: 0,
          speed: 0,
          typo: 0,
          inputValue: '',
        });
        // event.persist();
        document.querySelector('.inputType').value = '';
        // event.target.value = '';

        // getTextToWrite();
      }
    }
  }

  // clearInput(event) {
  //   const { textToWriteNotNormalized } = this.props;
  //   const inputTypeNotNormalized = document.querySelector('.inputType').value;

  //   if (textToWriteNotNormalized.length === inputTypeNotNormalized.length) {
  //     if (event.type === 'keydown') {
  //       if (event.keyCode === 13 || event.keyCode === 32) {
  //         document.querySelector('.inputType').value = null;
  //       }
  //     }
  //   }
  // }

  clearLog() {
    this.log = document.querySelector('.event-log-contents');
    this.log.innerHTML = '';
  }

  callNextText(event) {
    const { typo, speed } = this.state;
    const { scoring, postingResult } = this.props;

    if (event.type === 'keydown') {
      if (event.keyCode === 13) {
        const checkScore = scoring(speed, typo);
        this.setState({
          speedCheckArray: [],
          count: 0,
          speed: 0,
          typo: 0,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="control">
          <input
            className="inputType"
            onKeyDown={this.handleEvent}
            onKeyUp={this.handleSpace}
          />
        </div>

        <div className="event-log">
          <testarea readOnly className="event-log-contents" cols="50" />
          <button className="clear-log" onClick={this.clearLog}>
            Clear
          </button>
          <button onClick={this.handleClick}>check log</button>
          <textarea
            readOnly
            className="event-log-contents"
            rows="8"
            cols="25"
          />
        </div>
      </div>
    );
  }
}
