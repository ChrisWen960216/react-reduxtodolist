/* Created By ChrisWen
 * todoList-Main.js 文件
 */
import React, { Component } from 'react';
import TodoComponents from './todos/views/index.js';
import HeaderComponents from '../components/header/HeaderComponent.js';
import UserDialog from './userDialog/index.js';
import UserCenter from './userCenter/index.js';

import { getCurrentUser, signUp } from '../api/leanCloud.js';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        getCurrentUser();
        this.state = {
            localUser: getCurrentUser() || ''
        }
        this.userLoginOn = this.userLoginOn.bind(this);
        this.quitLogIn = this.quitLogIn.bind(this);
    }

    userLoginOn(values) {
        let userName = values.userName;
        let passWord = values.passWord;
        let email = values.email;
        let success = (user) => {
            console.log('user', user);
            this.setState({
                localUser: userName
            });
            console.log(this.state.localUser);
        }
        let error = (error) => {
            console.log('error', error);
        }
        signUp(userName, passWord, email, success, error);
    }

    quitLogIn() {
        this.setState({
            localUser: ''
        })
    }
    render() {
        const selectPanel = this.state.localUser ? <UserCenter user={ this.state.localUser } quitLogIn={ this.quitLogIn } /> : <UserDialog userLoginOn={ this.userLoginOn } />
        return (
            <div id='main-app'>
              { selectPanel }
              <HeaderComponents/>
              <TodoComponents/>
            </div>

        )
    }
}