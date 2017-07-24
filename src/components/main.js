/* Created By ChrisWen
 * todoList-Main.js 文件
 */
import React, { Component } from 'react';
import TodoComponents from './todos/views/index.js';
import HeaderComponents from './header/HeaderComponent.js';
//import UserDialog from './userDialog/index.js';

export default class MainApp extends Component {
    render() {
        return (

            <div id='main-app'>
              <HeaderComponents/>
              <TodoComponents/>
            </div>

        )
    }
}