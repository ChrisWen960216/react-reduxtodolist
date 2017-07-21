import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

export default class LogInPanel extends Component {
    render() {
        return (
            <form action="submit">
              <Input prefix={ <Icon type='user' style={ { fontSize: 13 } } /> } placeholder='UserName' />
              <Input type='password' prefix={ <Icon type='lock' style={ { fontSize: 13 } } /> } placeholder='PassWord' />
              <Button htmlType='submit' type='primary'>登录</Button>
              <a href="javascript::0">忘记密码？</a>
            </form>
        )
    }
}