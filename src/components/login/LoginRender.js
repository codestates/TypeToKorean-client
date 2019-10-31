import React from 'react';
import { Button, Avatar, Typography } from 'antd';

const { Title } = Typography;

class LoginRender extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div>
        <article class="mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
          <div>
            <Avatar shape="square" size={64} icon="user" />
          </div>
          <div>
            <Title level={4}>Username</Title>
          </div>
          <div>
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.enterLoading}
            >
              Userinfo
            </Button>
            <Button
              type="primary"
              icon="poweroff"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading}
            >
              Logout
            </Button>
          </div>
        </article>
      </div>
    );
  }
}

export default LoginRender;
