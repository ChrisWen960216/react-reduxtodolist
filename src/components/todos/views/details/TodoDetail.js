import React, { Component } from 'react';
import { Modal, Input, DatePicker } from 'antd';
const {TextArea} = Input;

export default class TodoDetail extends Component {
    constructor(props) {
        super(props)

        this.onOk = this.props.onOk.bind(this);
        this.onCancel = this.props.onCancel.bind(this);
    }



    render() {
        return (
            <Modal className='detail-modal' title={ this.props.todo.text } visible={ this.props.modalVisible } onOk={ this.onOk } onCancel={ this.onCancel }>
              <TextArea className='input-detail' placeholder='事情详情请记录在这里！如果没有，请点击关闭按钮！' />
              <div className='input-date-box'>
                <span>请选择提醒时间:</span>
                <DatePicker showTime format='YYY-MM-DD HH:MM:SS' placeholder='Select Time' onOk={ this.onOk } />
              </div>
            </Modal>
        )
    }


}