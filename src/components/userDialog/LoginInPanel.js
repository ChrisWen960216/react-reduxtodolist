import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class LoginIn extends Component {
    constructor(props) {
        super(props);
        this.findPassWord = this.props.findPassWord.bind(this);
        this.changePanel = this.props.changePanel.bind(this);
    }
    //点击登录按钮事件
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
                      <Input prefix={ <Icon type="user" style={ { fontSize: 13 } } /> } placeholder="Username" />
                  ) }
              </FormItem>
              <FormItem>
                { getFieldDecorator('password', {
                      rules: [{
                          required: true,
                          message: 'Please input your Password!'
                      }],
                  })(
                      <Input prefix={ <Icon type="lock" style={ { fontSize: 13 } } /> } type="password" placeholder="Password" />
                  ) }
              </FormItem>
              <FormItem>
                { getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                  })(
                      <Checkbox>Remember me</Checkbox>
                  ) }
                <a href="" onClick={ this.findPassWord }>忘记了密码？</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                Or <a href="" onClick={ this.changePanel }>现在就注册！</a>
              </FormItem>
            </Form>
            );
    }
}

const LoginInPanel = Form.create()(LoginIn);
export default LoginInPanel;