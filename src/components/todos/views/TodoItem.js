import React, { Component } from 'react';

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
              <input type="checkbox" checked={ this.props.todo.completed } onChange={ this.onToggle } />
              { this.props.todo.text }
              <button type='submit' onClick={ this.onDelete }>删除</button>
            </div>
        )
    }
}