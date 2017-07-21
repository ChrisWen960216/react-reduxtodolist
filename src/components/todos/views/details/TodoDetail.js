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
            <Modal className='detail-modal' title={ this.props.todo.text } visible={ this.props.modalVisible } onOk={ this.onOK } onCancel={ this.onCancel }>
              <TextArea className='input-detail' placeholder='Write Something here!' />
              <div className='input-date-box'>
                <span>请选择任务记录时间:</span>
                <DatePicker showTime format='YYY-MM-DD HH:MM:SS' placeholder='Select Time' onOk={ this.onOk } />
              </div>
            </Modal>
        )
    }


}