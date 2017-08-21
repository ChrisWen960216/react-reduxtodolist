/* Created By ChrisWen
 * todoList-Main.js 文件
 */
import React, { Component } from 'react';
import TodoComponents from './todos/views/index.js';
import HeaderComponents from '../components/header/HeaderComponent.js';
import UserDialog from './userDialog/index.js';
import UserCenter from './userCenter/index.js';

//import { getCurrentUser, signUp, signIn, signOut } from '../api/leanCloud.js';
import { message } from 'antd';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //localUser: getCurrentUser() || ''
            localUser: ''
        }
        this.userLoginOn = this.userLoginOn.bind(this);
        this.userLoginIn = this.userLoginIn.bind(this);
        this.quitLogIn = this.quitLogIn.bind(this);
        this.localUser = this.state.localUser.username;
    }


    userLoginOn(values) {
        let {userName, passWord, email} = values;
        let success = (user) => {
            this.setState({
                localUser: userName
            });
            message.success('欢迎您！' + userName);
        //console.log(this.state.localUser);
        }
        let error = (error) => {
            message.error('网络错误！请稍后重试')
            console.log('error', error);
        }
    // signUp(userName, passWord, email, success, error);
    }

    userLoginIn(values) {
        let {userName, passWord} = values;
        //console.log('userName', userName);
        let success = (user) => {
            this.setState({
                localUser: userName
            })
            message.success('欢迎您！' + userName);
        //console.log(this.state.localUser);
        }
        let error = (error) => {
            message.error('网络错误！请稍后重试')
            console.log('error', error);
        }
    //signIn(userName, passWord, success, error)
    }

    quitLogIn() {
        //signOut();
        this.setState({
            localUser: ''
        })
        message.success('退出成功!')
    }

    componentWillUpdate() {}
    render() {
        const selectPanel = this.state.localUser ?
            <div>
              { /*<UserCenter userMark={ this.localUser } quitLogIn={ this.quitLogIn } />*/ }
              { /*<HeaderComponents/>*/ }
              <TodoComponents />
            </div> :
            { /*<UserDialog userLoginOn={ this.userLoginOn } userLoginIn={ this.userLoginIn } />*/ }
        return (
            <div id='main-app'>
              { /* selectPanel */ }
              <TodoComponents />
            </div>

        )
    }
}