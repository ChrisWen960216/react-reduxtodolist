/* Created By ChrisWen
 * Link Component 
 */

import React, { Component } from 'react';

export default class Link extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.props.onClick.bind(this);
    }

    render() {
        return (
            <a href="#" className='filter-selector' onClick={ this.onClick }>
              { this.props.todos }
            </a>
        )
    }
}