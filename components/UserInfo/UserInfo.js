import React, { Component } from "react";
import { Statistic, Row, Col, Button } from "antd";
import BriefInfo from "./BriefInfo";
import Stat1 from "./Stat1";
import Stat2 from "./Stat2";

class UserInfo extends Component {
  render() {
    return (
      <div>
        <BriefInfo />
        <Stat1 />
        <Stat2 />
      </div>
    );
  }
}

export default UserInfo;
