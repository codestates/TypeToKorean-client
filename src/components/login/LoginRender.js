import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';

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
      <div
        style={{
          padding: 10,
          background: 'white',
          minHeight: '20vh',
          textAlign: 'center',
          width: 400,
        }}
      >
        <div>
          {this.props.loginImage ? (
            <Avatar shape="square" size={64} icon={this.props.loginImage} />
          ) : (
            <Avatar shape="square" size={64} icon="close" />
          )}
        </div>
        <div>
          {this.props.loginUserName ? (
            <Title level={4}>Username: {this.props.loginUserName}</Title>
          ) : (
            <Title level={4}>Username: something wrong!</Title>
          )}
        </div>
        <div>
          {/*<Link to="/info">
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.enterLoading}
            >
              Userinfo
            </Button>
          </Link>*/}
          <Link to="/">
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
              로그아웃
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginRender;
