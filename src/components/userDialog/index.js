/* Created By ChrisWen
 * Main Entries of userDialog
 */
import React, { Component } from 'react';
import LogInPanel from './LogInPanel.js';
import LogOnPanel from './LogOnPanel.js';
import FindPassWordPanel from './FindPasswordPanel.js';

import { Modal, Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;

export default class userDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: true
        }
    }

    render() {
        return (
            <Modal visible={ this.state.visibility }>
              <Tabs tab='登录/注册' defaultActiveKey='logIn'>
                <TabPane tab='登录' key="logIn">
                  <LogInPanel/>
                </TabPane>
                <TabPane tab='注册' key="logOn">
                  <LogOnPanel/>
                </TabPane>
                <TabPane tab='找回密码' key='finPassWord'>
                  <FindPassWordPanel/>
                </TabPane>
              </Tabs>
            </Modal>
        )
    }
}