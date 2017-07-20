/*  Created By ChrisWen
 *  todos-View 入口文件
 */
import React, { Component } from 'react';
import InputForm from './InputForm.js';
import TodosForm from './TodosForm.js';
import Filters from '../../filters/views/filter.js';

import { VisibilityFilters } from '../../filters/constants.js';
import { setVisibilityFilter } from '../../filters/action.js';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../action.js';

class TodoComponents extends Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    onToggle(e, todo) {
        let id = todo.id;
        this.props.toggleTodo(id);
    }

    onDelete(e, todo) {
        let id = todo.id;
        this.props.deleteTodo(id);
    }

    onPress(e) {
        let text = e.target.value.trim();
        if (e.key === 'Enter') {
            this.props.addTodo(text);
            e.target.value = '';
        }
    }

    render() {
        const {filters} = this.props
        return (

            <div className='input-components'>
              { console.log('filters', filters) }
              <InputForm onPress={ this.onPress } />
              <TodosForm todo={ this.props.todos } onToggle={ this.onToggle } onDelete={ this.onDelete } />
              <Filters filter={ filters } onFilterChange={ this.props.onFilterChange } />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:

            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_UNCOMPLETED:
            return todos.filter(todo => !todo.completed);
        default:
            return todos
    }
}


//将对应的redux state 转换成组件的 props 以供使用 mapStateToProps
function updateState(state) {
    return {
        todos: selectTodos(state.todos, state.filters),
        filters: state.filters
    }
}

//分发事件，让 reducer 进行对应的事件处理 mapDispatchToProps
function updateStates(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        onFilterChange: (nextFilter) => dispatch(setVisibilityFilter(nextFilter))
    }
}

//connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
export default connect(updateState, updateStates)(TodoComponents);