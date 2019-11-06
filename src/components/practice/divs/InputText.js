import React from 'react';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedCheckArray: [0],
      inputLength: 0,
      count: 0,
      speed: 0,
      typo: 0,
      inputValue: '',
      infoMsg: 'Welcome To TypeToKorean',
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.handleSpace = this.handleSpace.bind(this);
    this.checkTypo = this.checkTypo.bind(this);
  }

  async handleEvent(event) {
    const { speedCheckArray } = this.state;
    const { textToWriteNotNormalized } = this.props;
    const inputTypeNotNormalized = document.querySelector('.inputType').value;

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
      this.setState(prevState => ({
        speedCheckArray,
      }));
    }
  }

  async handleSpace(event) {
    event.persist();
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
      const newTypo = this.checkTypo(
        textToWriteNotNormalized,
        inputTypeNotNormalized,
      );

      scoring(KPM, newTypo, totalTime);

      if (newTypo / inputTypeNotNormalized.length > 0.5) {
        this.setState({
          speedCheckArray: [],
          count: 0,
          speed: 0,
          typo: 0,
          inputValue: null,
          infoMsg: '오타율이 50% 이상이면 데이터를 기록하지 않습니다.',
        });
        return '오타율이 50% 이상이면 데이터를 기록하지 않습니다.';
      }

      this.setState(prevState => ({
        typo: newTypo,
      }));

      if (event.which === 13 || event.which === 32) {
        console.log('enter, space working');
        document.querySelector('.inputType').value = null;
        // 점수 state로 올릴 때도 지워주자
        await this.setState(
          {
            speedCheckArray: [],
            count: 0,
            speed: 0,
            typo: 0,
            inputValue: null,
            infoMsg: '잘하셨어요, keep going!',
          },
          // () => {
          //   this.setState({
          //     speedCheckArray: [],
          //   });
          // },
        );
        return '잘하셨어요, keep going!';
      }

      if (
        textToWriteNotNormalized.length + 2 === inputTypeNotNormalized.length ||
        textToWriteNotNormalized.length + 3 === inputTypeNotNormalized.length
      ) {
        this.setState({
          speedCheckArray: [],
          count: 0,
          speed: 0,
          typo: 0,
          inputValue: null,
          infoMsg:
            '모두 다 작성을 하시고 스페이스를 눌러주세요 ! 다른 키를 누르면 오타가 증가됩니다.',
        });
        return '모두 다 작성을 하시고 스페이스를 눌러주세요 ! 다른 키를 누르면 오타가 증가됩니다.';
      }
      // console.log('TypoCount', typo);
      // console.log('KPM', KPM);
      // console.log('inputLength', inputLength);
      // console.log('speed', speedCheckArray);
      // console.log('inputType', inputTypeNotNormalized);
      return 'sth wrong';
    }
  }

  checkTypo(text, input) {
    let result = 0;
    for (let i = 0; i < input.length - 1; i += 1) {
      if (text[i] !== input[i]) {
        result += 1;
      }
    }
    return result;
  }

  render() {
    const { infoMsg, speedCheckArray } = this.state;

    return (
      <div>
        <div className="control">
          <div className="ant-card-bordered">{infoMsg}</div>
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
