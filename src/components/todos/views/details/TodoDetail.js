import React, { Component } from 'react';
import { Modal, Input, Switch, Card } from 'antd';
//import{DatePicker}from 'antd';
const {TextArea} = Input;

export default class TodoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textAreaDisabled: true,
            dateValue: ''
        };
        this.changeDetails = this.props.changeDetails.bind(this);
        this.onOk = this.onOk.bind(this);
        this.changeDate = this.props.changeDate.bind(this);
        this.onCancel = this.props.onCancel.bind(this);
        this.switchInput = this.switchInput.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);

    }

    switchInput() {
        let textAreaDisabled = this.state.textAreaDisabled;
        this.setState({
            textAreaDisabled: !textAreaDisabled
        })
    }
    onOk(e) {
        e.preventDefault();
        this.props.onOk();

        let disable = this.state.textAreaDisabled;
        if (disable === false) {
            this.switchInput()
        }
    }


    onPressEnter(e) {
        e.preventDefault();
        this.onOk();
        e.target.value = '';
        this.switchInput();
    }




    render() {
        const detailCard = this.props.todo.details ? <Card className='detail-card' title={ this.props.todo.text + '详情预览' }>
                                                       { this.props.todo.details }
                                                     </Card> : ''
        return (
            <Modal className='detail-modal' title={ this.props.todo.text } visible={ this.props.modalVisible } onOk={ this.onOk } onCancel={ this.onCancel }>
              { detailCard }
              <TextArea onChange={ this.changeDetails } onPressEnter={ this.onPressEnter } disabled={ this.state.textAreaDisabled } placeholder='事情详情请记录在这里！如果没有，请点击关闭按钮！' />
              <div>
                <div className='input-switch'>
                  <span>点此添加详情:  <Switch checked={ !this.state.textAreaDisabled } onChange={ this.switchInput } /></span>
                </div>
                { /*<div className='input-date-box'>
                                                                                                                                                                                                                                                                                                                                                  <span>请选择提醒时间:</span>
                                                                                                                                                                                                                                                                                                                                                  <DatePicker showTime format='YY-MM-DD HH:MM:SS' placeholder='Select Time' onChange={ this.changeDate } onOk={ this.onOk.bind(this) } />
                                                                                                                                                                                                                                                                                                                                                </div>*/ }
              </div>
            </Modal>
        )
    }


}