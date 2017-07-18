/* Created By ChrisWen
 * 表单组件 
 */
import React, { Component } from 'react';
import { Input } from 'antd';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.props.onPress.bind(this);
    }

    render() {
        return ( <div className='input-line'>
                   <Input type="text" onKeyPress={ this.onPress } />
                 </div>
        )
    }
}