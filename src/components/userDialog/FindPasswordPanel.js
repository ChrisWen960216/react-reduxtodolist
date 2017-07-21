import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

export default class FindPassWordPanel extends Component {
    render() {
        return (
            <form action="submit">
              <Input prefix={ <Icon type='mail' style={ { fontSize: 13 } } /> } placeholder='Email' />
              <Button htmlType='submit' type='primary'>找回密码</Button>
              <a href="#">突然想起来密码了？点这里返回</a>
            </form>
        )
    }
}
