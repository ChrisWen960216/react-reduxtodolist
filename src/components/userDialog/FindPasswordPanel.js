import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { sendPasswordResetEmail } from '../../api/leanCloud.js';
const FormItem = Form.Item;


class FindPassWord extends Component {
    constructor(props) {
        super(props);
        this.returnLogIn = this.props.returnLogIn.bind(this);
    }
    //点击找回按钮按钮事件
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let {email} = values;
                let success = () => {
                    message.success('邮件已经成功发送！请在邮箱重置密码。')
                }
                let error = () => {
                    message.error('网络故障！请稍后重试！')
                }
                sendPasswordResetEmail(email, success, error);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={ this.handleSubmit } className="login-form">
              <FormItem>
                { getFieldDecorator('email', {
                      rules: [{
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                      }, {
                          required: true,
                          message: 'Please input your E-mail!',
                      }],
                  })(
                      <Input prefix={ <Icon type="mail" style={ { fontSize: 13 } } /> } type="text" placeholder="请输入邮箱" />
                  ) }
              </FormItem>
              <a href="" onClick={ this.returnLogIn }>点这里返回登录界面</a>
              <Button type="primary" htmlType="submit" className="login-form-button">找回密码</Button>
            </Form>
            );
    }
}

const FindPassWordPanel = Form.create()(FindPassWord);
export default FindPassWordPanel;