import React, { Component } from 'react';
import { Card } from 'antd';
import BriefInfo from '../components/userInfo/BriefInfo';
import Stat1 from '../components/userInfo/Stat1';
import Stat2 from '../components/userInfo/Stat2';
import Stat2Warpper from '../components/userInfo/Stat2Warpper';

const WarppedStat2 = Stat2Warpper(Stat2);

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfoIsLoading: false,
      data: [],
      briefInfo: '',
    };

    // this.getData = this.getData.bind(this);
    this.getStat1 = this.getStat1.bind(this);
    this.getStat2 = this.getStat2.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({
        UserInfoIsLoading: true,
      });
      this.setState({
        UserInfoIsLoading: false,
        data: await this.getStat2(),
      });
      console.log(this.state.data);
    } catch (error) {
      console.log('userInfo.js componentDidMount error', error);
    }
    await this.getStat1();
    // window.setInterval(() => {
    //   this.setState({
    //     data: this.getStat2(),
    //   });
    // }, 5000);
  }

  async getStat1() {
    const data = await window.fetch('http://localhost:5000/profile'); // 3.133.156.53:5000
    const fetchedData = await data.json();
    this.setState({
      briefInfo: fetchedData,
    });
    console.log('fetchedData stat1', fetchedData.username);
  }

  async getStat2() {
    // Create random array of objects (with date)
    const data = await window.fetch('http://localhost:5000/statistics'); // 3.133.156.53:5000
    const fetchedData = await data.json();
    this.setState({
      data: fetchedData,
    });

    const countedNames = fetchedData.reduce(function(allDatas, data) {
      const typeSpeed10 = Math.round(data.typeSpeed / 10) * 10;
      if (typeSpeed10 in allDatas) {
        allDatas[typeSpeed10] += 1;
      } else {
        allDatas[typeSpeed10] = 1;
      }
      return allDatas;
    }, {});

    this.result = [];
    for (const key in countedNames) {
      this.result.push({
        label: key,
        value: countedNames[key],
      });
    }
    // for (let i = 0; i < countedNames.length; i += 1) {
    //   this.result.push({
    //     label: countedNames[i].id,
    //     value: Math.round(fetchedData[i].typeSpeed / 10) * 10,
    //   });
    // }
    return this.result;
  }

  getUserInfo() {
    fetch('http://localhost:5000/users/id') // 3.133.156.53:5000
      .then(res => res.json())
      .then(json => {
        this.setState({
          userInfo: json,
        });
      });
  }

  render() {
    const { data, UserInfoIsLoading, briefInfo } = this.state;
    return (
      <Card style={{ marginBottom: 16, marginTop: 16 }}>
        <BriefInfo
          username={briefInfo.username}
          email={briefInfo.email}
          phone={briefInfo.phone}
        />
        <br />
        <Stat1 />
        <br />
        <WarppedStat2
          data={data}
          UserInfoIsLoading={UserInfoIsLoading}
          title="Typing Korean, You vs. World"
          color="#70CAD1"
        />
      </Card>
    );
  }
}

export default UserInfo;
