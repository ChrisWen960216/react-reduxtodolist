import React, { Component } from 'react';
import { Button, Checkbox } from 'antd';

import TodoDetail from './details/TodoDetail.js';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        }

        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onToggle(e) {
        this.props.onToggle(e, this.props.todo)
    }

    onDelete(e) {
        this.props.onDelete(e, this.props.todo)
    }

    showDetail(e) {
        e.preventDefault();
        this.setState({
            modalVisible: true
        })
    }

    onOk() {
        this.onCancel();
    }

    onCancel() {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <div className='todo-item'>
              <Checkbox className='check-button' checked={ this.props.todo.completed } onChange={ this.onToggle } />
              <h3>{ this.props.todo.text }</h3>
              <TodoDetail todo={ this.props.todo } modalVisible={ this.state.modalVisible } onOk={ this.onOk } onCancel={ this.onCancel } />
              <Button className='delete-button' type='danger' htmlType='submit' onClick={ this.onDelete }>删除</Button>
              <Button className='detail-button' type='primary' onClick={ this.showDetail }>详情</Button>
            </div>
        )
    }
}