import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
import { History } from 'history/index'
import './index.css'

interface Props {
  form: WrappedFormUtils,
  user: any,
  history: History,
  abc?: string
}

@inject('user')
@observer
class LoginPage extends React.Component<Props>{

  // 登陆处理函数 
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { code, msg } = await this.props.user.login(values);
        if (code === 1) {
          // 跳转路由
          // this.props['history'].relace('/main')
          this.props.history.replace('/main');
        } else {
          // 提示错误
          message.error(msg || "用户名或者密码错误")
        }
      }
    });
  };

  render() {
    // console.log('props...', this.props, this.props.user.login);

    const { getFieldDecorator } = this.props.form;
    const { user_name, user_pwd } = this.props.user.account;

    return (
      <div className='loginbox'>
        <div className="logincontent">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('user_name', {
                validateTrigger: 'onBlur',
                initialValue: user_name,
                rules: [
                  {
                    validator: (ruler, value, callback) => {
                      console.log('value...', value);
                      if (/[a-z]{5,20}/.test(value)) {
                        callback();
                      } else {
                        callback('Please input valid username!')
                      }
                    }
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                validateTrigger: 'onBlur',
                initialValue: user_pwd,
                rules: [
                  {
                    validator: (ruler, value, callback) => {
                      console.log('value...', value);
                      if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
                        callback();
                      } else {
                        callback('Please input valid password!')
                      }
                    }
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('autoLogin', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Auto login in 7 days</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
          </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
          </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>

      </div>

    );
  }
}

export default Form.create()(LoginPage);