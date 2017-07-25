import React, { Component } from 'react';
import { Button, Checkbox } from 'antd';
import TodoDetail from './details/TodoDetail.js';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }

        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.onAddDetails = this.onAddDetails.bind(this);
        this.changeDetails = this.changeDetails.bind(this);
        this.changeDate = this.changeDate.bind(this);
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

    onAddDetails(e) {
        this.props.onAddDetails(e, this.props.todo);
        setInterval(this.onCancel(), 1000);
    }

    changeDate(e) {
        this.props.changeDate(e, this.props.todo);
    }

    changeDetails(e) {
        this.props.changeDetails(e, this.props.todo)
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
              <TodoDetail todo={ this.props.todo } modalVisible={ this.state.modalVisible } onOk={ this.onAddDetails } onCancel={ this.onCancel } changeDetails={ this.changeDetails }
                changeDate={ this.changeDate } />
              <Button className='delete-button' type='danger' htmlType='submit' onClick={ this.onDelete }>删除</Button>
              <Button className='detail-button' type='primary' onClick={ this.showDetail }>详情</Button>
            </div>
        )
    }
}
