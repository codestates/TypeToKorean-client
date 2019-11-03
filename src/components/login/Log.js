import React from 'react';
import Login from './Login';
import LoginRender from './LoginRender';

class Log extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginComplete: false,
      username: undefined,
      image: undefined,
    };
    this.handleLoginState = this.handleLoginState.bind(this);
    this.handleLogoutState = this.handleLogoutState.bind(this);
  }

  handleLoginState(username, image) {
    this.setState({
      loginComplete: true,
      username: username,
      image: image,
    });
  }

  handleLogoutState() {
    this.setState({
      loginComplete: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.loginComplete ? (
          <LoginRender handleLogoutState={this.handleLogoutState} />
        ) : (
          <Login handleLoginState={this.handleLoginState} />
        )}
      </div>
    );
  }
}

export default Log;
