/* Created By ChrisWen
 * Main Entries of userDialog
 */
import React, { Component } from 'react';
import LoginInPanel from './LoginInPanel.js';
import LoginOnPanel from './LoginOnPanel.js';
import FindPassWordPanel from './FindPasswordPanel.js';

import { Modal } from 'antd';

export default class userDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      changeModel: true,
      findPassWord: false
    }
    this.findPassWord = this.findPassWord.bind(this);
    this.changePanel = this.changePanel.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.returnLogIn = this.returnLogIn.bind(this);
    this.userLoginOn = this.props.userLoginOn.bind(this);
    this.userLoginIn = this.props.userLoginIn.bind(this);
  }

  changePanel(e) {
    e.preventDefault();
    this.setState({
      changeModel: !this.state.changeModel
    })
  }

  findPassWord(e) {
    e.preventDefault();
    this.setState({
      findPassWord: true
    })
  }

  returnLogIn(e) {
    e.preventDefault();
    this.setState({
      findPassWord: false
    })
  }

  closeDialog() {
    this.setState({
      visibility: false
    })
  }

  render() {
    const changePanel = () => {
      if (this.state.findPassWord === true) {
        return <FindPassWordPanel returnLogIn={ this.returnLogIn } />
      } else {
        if (this.state.changeModel === true) {
          return <LoginInPanel changePanel={ this.changePanel } closeDialog={ this.closeDialog } userLoginIn={ this.userLoginIn } findPassWord={ this.findPassWord } />
        } else {
          return <LoginOnPanel changePanel={ this.changePanel } closeDialog={ this.closeDialog } userLoginOn={ this.userLoginOn } />
        }
      }
    }
    return (
      <Modal title='账号中心' visible={ this.state.visibility } width={ 400 } footer={ null } closable={ false }>
        { changePanel() }
      </Modal>

    )
  }
}