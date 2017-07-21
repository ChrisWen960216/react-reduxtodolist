import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

export default class LogOnPanel extends Component {
    render() {
        return (
            <form action="submit">
              <Input prefix={ <Icon type='user' style={ { fontSize: 13 } } /> } placeholder='UserName' />
              <Input type='password' prefix={ <Icon type='lock' style={ { fontSize: 13 } } /> } placeholder='PassWord' />
              <Input prefix={ <Icon type='mail' style={ { fontSize: 13 } } /> } placeholder='Email' />
              <Button htmlType='submit' type='primary'>注册</Button>
              <a href="#">忘记密码？点这里找回~</a>
            </form>
        )
    }
}