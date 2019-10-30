import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

export default class ReadMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card
          title="타자 연습을 통한 한국어 공부"
          extra={<a href="#">More</a>}
          style={{ width: 700 }}
        >
          Thank you for choosing our Hangul Education Project, TypeToKorea. You
          will learn how to type Korean here. However, it's not only about
          learning Hangul Typing, but also about learning basic Korean naturally
          and intuitively via Hangul Typing. Don't Learn Koean by Textbook in
          boring way, We, TypeToKorean will be responsoble to let you understand
          Korean! 여러분은 앞으로 Type To Korean 에서 한국어 타자연습을 진행하게
          됩니다. 한국어 타자연습은 여러분의 타자연습 뿐 아니라, 한국어를
          공부하게 됩니다. Team TypeToKorea와 함께 기존 지루한 암기식 언어
          공부에서 벗어나서 다양한 한국어 컨텐츠와 함께 공부할까요?
        </Card>
        <Card
          title="What Is Touch Typing?"
          extra={<a href="#">More</a>}
          style={{ width: 700 }}
        >
          Touch typing is the ability to use muscle memory to find keys fast,
          without using the sense of sight, and with all the available fingers,
          just like piano players do. It significantly improves typing speed and
          eliminates errors. Touch typing simply makes you more productive and
          it is a skill worth learning. However, many people engage in the bad
          habit of ‘hunt-and-peck’ typing, even those seasoned professionals
          with years and decades of computer experience. It is easy to
          understand, though, as touch typing requires dedicated practice to
          learn it well. That is why we created Keybr.com, a free online typing
          tutorial, to give you the most advanced learning experience and let
          you develop your typing skills faster. Touch Typing은 손가락 근육의
          자연스로운 체득을 통해
        </Card>
        <Card
          title=" How Does This Typing Tutor Work?"
          extra={<a href="#">More</a>}
          style={{ width: 700 }}
        >
          There are several features in Keybr.com that set it apart from most of
          the typing practice software out there. In short, it employs
          statistics and smart algorithms to automatically generate typing
          lessons matching your skills. Lets discuss this in details. First, it
          does not force you to repeat the same characters over and over again;
          that is simply slow, boring and contributes very little to your
          learning. For example, the words like ‘jjf jjk jdd …’ are very
          unnatural, hard to read and will slow down noticeably even experienced
          typists. Instead, Keybr.com generates random, but readable and
          pronounceable words using the phonetic rules of your native language.
          These words look almost natural, and often they really are. Typing
          sensible text is much easier than repeating random letters, and it
          helps you to remember frequent key combinations. The latest point is
          very important. For example, it’s almost impossible for the letter ‘W’
          to follow the ‘Z’ in English, and you will never type this combination
          in Keybr.com. Instead, you will type more common words, such as «the,»
          «that,» «with,» and so on. And soon you will learn how to type the
          «th» combo really fast. Second, Keybr.com measures your keystroke
          dynamics and collects comprehensive typing statistics. For example, it
          measures your typing speed for each individual key, and uses this data
          to generate random words putting emphasis on the weakest key. The more
          troubles you have with a particular key, the more you will be typing
          it. It means, the generating algorithm will put that letter in every
          word in the next generated lesson. Your typing skills are re-evaluated
          after every completed lesson, and the next lesson will be adjusted
          accordingly. Third, Keybr.com lets you introduce as few keys as
          possible to the lesson, adding more keys automatically when it decides
          that you are proficient at the current level. When you only start
          learning it generates lessons with words from a very small alphabet of
          the most frequent letters. When your typing speed for every key in
          that alphabet reaches certain threshold, the algorithm adds the next
          most frequent letter to the alphabet. And so on, until the next
          letter. This way you will learn the most frequent letters first, and
          the least frequent ones later.
        </Card>
        <Card
          title="Typing Lessons, Is It Really Effective?"
          extra={<a href="#">More</a>}
          style={{ width: 700 }}
        >
          We selected a few example profiles to show you how people advance in
          learning touch typing when using Keybr.com. These are real, anonymized
          user profiles. Hopefully they will inspire you to keep learning!
          Example 1, from 30 to 70 WPM after 4 hours 20 minutes of practicing in
          the course of 15 days Example 2, from 35 to 70 WPM after 2 hours and
          20 minutes of practicing in the course of 12 days Example 3, a decent
          jump from less than 20 to 40 WPM after 5 hours and 30 minutes of
          practicing in the course of 11 days Example 4, after 2 hours and 10
          minutes of practicing in the course of 11 days, typing speed stayed at
          ~70 WPM (which is already pretty high), but accuracy improved Example
          5, from 20 to 45 WPM after about 10 hours of practicing in the course
          of 22 day (yes, sometimes it takes longer)
        </Card>
      </div>
    );
  }
}
