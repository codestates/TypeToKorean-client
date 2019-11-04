import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import LoginRender from './LoginRender';
import Log from './Log';

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.userData = {
      username: null,
      image: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('http://localhost:5000/login', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            console.log(values);
            return response.json();
          })
          .then(json => {
            message.success('Now you are logged in!', 1.0);
            if (json.username) {
              // this.userData.username = json.username;
              // this.userData.image = json.image;

              this.props.handleLoginState(json.id, json.username, json.image);
            }
            console.log(json);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className="mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your E-mail!' }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="E-mail"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pw', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;
