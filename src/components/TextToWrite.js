import React, { Component } from 'react';
import { Card } from 'antd';

class TextToWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        한글은 발음기관과 하늘, 땅, 사람을 본따 고안된 음소문자로, 닿소리 14자에
        홀소리 10자 총 24자로 구성되어 있다. "나랏말이 중국과 달라" 문제를 느낀
        조선 세종이 한국어를 표기하기 위하여 1443년 창제, 1446년 반포하였다.
        낱자가 음가만 표기하기 때문에 갈래로는 음소문자에 속하나, 네모 칸에
        초성, 중성, 종성을 이루는 자모음을 한데 모아 쓰는 방식 때문에 음절문자의
        특성도 일부 지닌다. 원래 글자 수는 닿소리 17자에 홀소리 11자 총
        28자였으나 이후 4자가 소실, 24자만 쓰이게 되었다. 대한민국과
        조선민주주의인민공화국과 옌볜 조선족 자치주에서는 공용 문자로,
        인도네시아 부톤 섬에서는 찌아찌아어의 보조 문자로 채택되었다. 북한에서는
        조선글(朝鮮-)이라 한다.
      </Card>
    );
  }
}

export default TextToWrite;
