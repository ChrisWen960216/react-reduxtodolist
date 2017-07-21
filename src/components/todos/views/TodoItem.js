import React, { Component } from 'react';
import { Button, Checkbox } from 'antd';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onToggle(e) {
        this.props.onToggle(e, this.props.todo)
    }

    onDelete(e) {
        this.props.onDelete(e, this.props.todo)
    }

    render() {
        return (
            <div className='todo-item'>
              <Checkbox checked={ this.props.todo.completed } onChange={ this.onToggle } />
              <h3>{ this.props.todo.text }</h3>
              <Button className='delete-button' type='danger' htmlType='submit' onClick={ this.onDelete }>删除</Button>
              <Button className='detail-button' type='primary'>详情</Button>
            </div>
        )
    }
}