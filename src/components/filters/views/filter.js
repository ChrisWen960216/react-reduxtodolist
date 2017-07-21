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
              <p onClick={ e => {
                               e.preventDefault();
                               this.props.onFilterChange(filter);
                           } }>
                { name }
              </p>
            </Button>

        )
    }

    render() {
        return (
            <div className='filter-button-list'>
              { this.renderFilter('SHOW_ALL', '全部') }
              { this.renderFilter('SHOW_COMPLETED', '完成') }
              { this.renderFilter('SHOW_UNCOMPLETED', '未做') }
            </div>
        )
    }
}