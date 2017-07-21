/* Created By ChrisWen
 * 表单组件 
 */
import React, { Component } from 'react';
import { Input, Button } from 'antd';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.props.onPress.bind(this);
    //this.onClick = this.props.onClick.bind(this);
    }


    render() {
        return ( <div className='input-line'>
                   <Input className='input-form' type="text" onKeyPress={ this.onPress } placeholder='Please Input your todoItem!' maxLength='10' />
                   <Button className='input-button' type='primary' htmlType='submit' onClick={ this.onClick }>提交</Button>
                 </div>
        )
    }
}