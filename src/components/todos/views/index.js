/*  Created By ChrisWen
 *  todos-View 入口文件
 */

/* <InputForm/> 输入框组件，用户进行输入，获得输入值。子组件，通过 props 传递数据/函数。
 *  <TodosForm/> 展示组件，展示系统中的 todos.需要注意的是，并不是直接获取 state.todos，而是经过Filters组件过滤之后的 todos。
 *  <Filters/> 过滤器组件，处理对应的 todos,经过处理的 todos 再交由 <TodosForm/> 组件进行展示。
 */

import React, { Component } from 'react';
import InputForm from './InputForm.js';
import TodosForm from './TodosForm.js';
import Filters from '../../filters/views/filter.js';

//import UserDialog from '../../userDialog/index.js';
import { VisibilityFilters } from '../../filters/constants.js';
import { setVisibilityFilter } from '../../filters/action.js';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, detailTodo } from '../action.js';
import { URL } from '../../../api/url.js';
//import { sendNetRequest } from '../../../api/request.js';

import '../../../style/main.scss';

class TodoComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            momentValue: '',
            momentDetails: '',
            momentDate: '',
            momentUser: ''
        }
        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onPress = this.onPress.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onAddDetails = this.onAddDetails.bind(this);
        this.changeDetails = this.changeDetails.bind(this);

        fetch(URL).then(res => {
            res.json().then(resJson => {
                resJson.map(item => this.props.addTodo(item.title, item.id));
            })
        })
    }


    onToggle(e, todo) {
        // let type = 'PATCH';
        // let id = todo.id;
        // let arg = `{"id":${todo.id},"completed":"true"}`;
        // this.props.toggleTodo(id);
        // sendNetRequest(type, id, arg);
    }

    onDelete(e, todo) {
        let id = todo.id;
        let initRequest = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: `{"id":${id},"deleted":"true"}`
        };
        let myRequest = new Request(`${URL}/${id}`, initRequest);
        fetch(myRequest);
        this.props.deleteTodo(id);
    }

    onPress(e) {
        if (e.key === 'Enter') {
            if (e.target.value === '') {
                alert('不能为空！')
            } else {
                this.props.addTodo(e.target.value);
                e.target.value = '';
                this.setState({
                    momentValue: ''
                })
            }
        }
    }

    onAddDetails(e, todo) {
        let id = todo.id;
        let detail = this.state.momentDetails;
        this.props.detailTodo(id, detail);
    }

    changeDetails(e) {
        this.setState({
            momentDetails: e.target.value
        })
    }

    /* 挂载 onChange 事件，极力避免操作 Dom 元素。
     *  onChange 将 Input 中的值存入本地 Component 的 State 中 再经由 onClick 事件进行提交
     */
    onChange(e) {
        this.setState({
            momentValue: e.target.value
        })
    }

    onClick() {
        if (this.state.momentValue === '') {
            alert('不被接受的数据！')
        } else {
            let initRequest = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: `{"title":"${this.state.momentValue}","completed":"false","deleted":"false"}`
            };
            let myRequest = new Request(URL, initRequest);
            fetch(myRequest);
            this.props.addTodo(this.state.momentValue);
            this.setState({
                momentValue: ''
            });
        }

    }

    render() {
        const {filters} = this.props;
        return ( <div>
                   < InputForm className='input-form' onPress={ this.onPress } onClick={ this.onClick } onChange={ this.onChange } />
                   < Filters filter={ filters } onFilterChange={ this.props.onFilterChange } />
                   < TodosForm todo={ this.props.todos } onToggle={ this.onToggle } onDelete={ this.onDelete } onAddDetails={ this.onAddDetails } changeDetails={ this.changeDetails }
                   />
                 </div>
        )
    }
}

/* 事件处理函数，由点击的  <Filters/> 组件传递对应的 filter 值对 todos 进行第一步处理
 * 处理之后再交由 <TodosForm /> 组件进行二次处理（deleted）并展示
 */
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
function mapStateToProps(state) {
    return {
        todos: selectTodos(state.todos, state.filters),
        filters: state.filters
    }
}

//分发事件，让 reducer 进行对应的事件处理 mapDispatchToProps
function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title, id) => dispatch(addTodo(title, id)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        detailTodo: (id, text) => dispatch(detailTodo(id, text)),
        onFilterChange: (nextFilter) => dispatch(setVisibilityFilter(nextFilter))
    // readTodo: (array) => dispatch(readTodo(array))
    }
}

//connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
export default connect(mapStateToProps, mapDispatchToProps)(TodoComponents);