import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import { Card } from 'antd';


export default class TodosForm extends Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAddDetails = this.onAddDetails.bind(this);
        this.changeDetails = this.changeDetails.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    onToggle(e, item) {
        this.props.onToggle(e, item)
    }

    onDelete(e, item) {
        this.props.onDelete(e, item)
    }

    onAddDetails(e, item) {
        this.props.onAddDetails(e, item)
    }

    changeDetails(e, item) {
        this.props.changeDetails(e, item)
    }

    changeDate(e, item) {
        this.props.changeDate(e, item)
    }

    // 遍历 todos 并进行展示，同时过滤掉已经删除的事件
    render() {
        let todoList = this.props.todo.filter((item) => !item.deleted).map((item, index) => (
            <li key={ item.key }>
              <Card className='todo-card'>
                <TodoItem todo={ item } onToggle={ this.onToggle } onDelete={ this.onDelete } onAddDetails={ this.onAddDetails } changeDate={ this.changeDate }
                  changeDetails={ this.changeDetails } />
              </Card>
            </li>
        ))
        return (
            <div>
              { todoList }
            </div>
        )
    }


}