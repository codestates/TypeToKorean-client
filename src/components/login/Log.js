import React from 'react';
import Login from './Login';
import LoginRender from './LoginRender';

class Log extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      loginId,
      loginUserName,
      loginComplete,
      loginImage,
      handleLoginState,
      handleLogoutState,
    } = this.props;

    return (
      <div style={{ width: '22vw', height: '40vh', background: 'white' }}>
        {loginComplete ? (
          <LoginRender
            handleLogoutState={handleLogoutState}
            loginUserName={loginUserName}
            loginImage={loginImage}
          />
        ) : (
          <Login handleLoginState={handleLoginState} />
        )}
      </div>
    );
  }
}

export default Log;
