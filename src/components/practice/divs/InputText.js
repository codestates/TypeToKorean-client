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
    this.handleSpace = this.handleSpace.bind(this);
  }

  async handleEvent(event) {
    const { speedCheckArray } = this.state;

    if (event.which === 27) {
      await this.setState({
        speedCheckArray: [],
        count: 0,
        speed: 0,
        typo: 0,
      });
      document.querySelector('.inputType').value = null;
    }

    if (event.type === 'keydown') {
      speedCheckArray.push(event.timeStamp);
      await this.setState(prevState => ({
        speedCheckArray,
      }));
    }
  }

  async handleSpace(event) {
    const {
      speedCheckArray,
      inputLength,
      count,
      speed,
      typo,
      inputValue,
    } = this.state;
    const { textToWrite, textToWriteNotNormalized, scoring } = this.props;
    const inputTypeNotNormalized = document.querySelector('.inputType').value;

    if (textToWriteNotNormalized.length + 1 === inputTypeNotNormalized.length) {
      const totalTime =
        speedCheckArray[speedCheckArray.length - 1] - speedCheckArray[0];

      const KPM = textToWrite.length * (60000 / totalTime); // 속도 계산

      // 여기서 오타 잡는 함수 실행
      const checkTypo = (text, input) => {
        let result = 0;
        for (let i = 0; i < input.length - 1; i += 1) {
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

      await this.setState(prevState => ({
        typo: newTypo,
      }));

      if (event.which === 13 || event.which === 32) {
        console.log('enter, space working');
        document.querySelector('.inputType').value = '';
        // 점수 state로 올릴 때도 지워주자
        await this.setState({
          speedCheckArray: [],
          count: 0,
          speed: 0,
          typo: 0,
          inputValue: null,
        });
      }
      // console.log('TypoCount', typo);
      // console.log('KPM', KPM);
      // console.log('inputLength', inputLength);
      // console.log('speed', speedCheckArray);
      // console.log('inputType', inputTypeNotNormalized);
    }
  }

  render() {
    return (
      <div>
        <div className="control">
          <input
            style={{ width: '100%' }}
            className="inputType"
            onKeyDown={this.handleEvent}
            onKeyUp={this.handleSpace}
          />
        </div>
      </div>
    );
  }
}
