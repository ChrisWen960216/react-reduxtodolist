import React, { Component } from 'react';
import { Button } from 'antd';



export default class Filters extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return (<Button type='primary' className='filter-button'>
                      { name }
                    </Button>);
        }
        return (

            <Button type='dashed' className='filter-button'>
              <a href="#" onClick={ e => {
                                        e.preventDefault();
                                        this.props.onFilterChange(filter);
                                    } }>
                { name }
              </a>
            </Button>

        )
    }

    render() {
        return (
            <p>
              { this.renderFilter('SHOW_ALL', '全部') }
              { this.renderFilter('SHOW_COMPLETED', '完成') }
              { this.renderFilter('SHOW_UNCOMPLETED', '激活') } .
            </p>
        )
    }
}