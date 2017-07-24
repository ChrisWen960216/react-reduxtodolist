import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

export default class FindPassWordPanel extends Component {
    render() {
        return (
            <form action="submit">
              <ul>
                <li> <span>邮箱：</span>
                  <Input prefix={ <Icon type='mail' style={ { fontSize: 13 } } /> } placeholder='Email' className='userDiog-input' />
                </li>
                <li>
                  <Button htmlType='submit' type='primary'>找回密码</Button>
                  <a href="#">突然想起来密码了？点这里返回</a></li>
              </ul>
            </form>
        )
    }
}
