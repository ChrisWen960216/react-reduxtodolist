import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;


class LoginOn extends Component {
    constructor(props) {
        super(props);
        this.changePanel = this.props.changePanel.bind(this);
    }

    //点击注册按钮事件
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.closeDialog();
            }
        });

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={ this.handleSubmit } className="login-form">
              <FormItem>
                { getFieldDecorator('userName', {
                      rules: [{
                          required: true,
                          message: 'Please input your username!'
                      }],
                  })(
                      <Input prefix={ <Icon type="user" style={ { fontSize: 13 } } /> } placeholder="请输入用户名" />
                  ) }
              </FormItem>
              <FormItem>
                { getFieldDecorator('password', {
                      rules: [{
                          required: true,
                          message: 'Please input your Password!'
                      }],
                  })(
                      <Input prefix={ <Icon type="lock" style={ { fontSize: 13 } } /> } type="password" placeholder="请输入密码" />
                  ) }
              </FormItem>
              <FormItem>
                { getFieldDecorator('email', {
                      rules: [{
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                      }, {
                          required: true,
                          message: 'Please input your E-mail!'
                      }],
                  })(
                      <Input prefix={ <Icon type="mail" style={ { fontSize: 13 } } /> } type="password" placeholder="请输入邮箱" />
                  ) }
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  注册
                </Button>
                Or <a href="" onClick={ this.changePanel }>已经有账号？现在就登录！</a>
              </FormItem>
            </Form>
            );
    }
}

const LoginOnPanel = Form.create()(LoginOn);
export default LoginOnPanel;
