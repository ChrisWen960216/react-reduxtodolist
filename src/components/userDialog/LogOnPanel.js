import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

export default class LogOnPanel extends Component {
    render() {
        return (
            <form action="submit">
              <ul>
                <li>
                  <Input className='userDiog-input' prefix={ <Icon type='user' style={ { fontSize: 13 } } /> } placeholder='UserName' />
                </li>
                <li>
                  <Input className='userDiog-input' type='password' prefix={ <Icon type='lock' style={ { fontSize: 13 } } /> } placeholder='PassWord' />
                </li>
                <li>
                  <Input className='userDiog-input' prefix={ <Icon type='mail' style={ { fontSize: 13 } } /> } placeholder='Email' />
                </li>
                <li>
                  <Button htmlType='submit' type='primary'>注册</Button>
                  <a href="#">忘记密码？点这里找回~</a></li>
              </ul>
            </form>
        )
    }
}