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
      <div>
        <article className="mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
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
            <Link to="/info">
              <Button
                type="primary"
                loading={this.state.loading}
                onClick={this.enterLoading}
              >
                Userinfo
              </Button>
            </Link>
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
                Logout
              </Button>
            </Link>
          </div>
        </article>
      </div>
    );
  }
}

export default LoginRender;
