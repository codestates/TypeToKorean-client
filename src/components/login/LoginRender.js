import React from 'react';
import { Button, Avatar, Typography } from 'antd';

const { Title } = Typography;

class LoginRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    };
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  logoutButton = () => {
    fetch('http://localhost:5000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      this.props.handleLogoutState();
      return response.json();
    });
  };

  render() {
    return (
      <div>
        <article class="mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
          <div>
            {this.props.image ? (
              <Avatar shape="square" size={64} icon={this.props.image} />
            ) : (
              <Avatar shape="square" size={64} icon="user" />
            )}
          </div>
          <div>
            {this.props.username ? (
              <Title level={4}>Username: {this.props.username}</Title>
            ) : (
              <Title level={4}>Username: {this.props.username}</Title>
            )}
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
              onClick={
                (this.enterIconLoading,
                () => {
                  this.logoutButton();
                })
              }
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
