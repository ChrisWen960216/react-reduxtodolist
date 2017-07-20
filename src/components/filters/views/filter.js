import React, { Component } from 'react';

export default class Filters extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }
        return (
            <a href="#" onClick={ e => {
                          e.preventDefault();
                          this.props.onFilterChange(filter);
                      } }>
              { name }
            </a>
        )
    }

    render() {
        return (
            <p>
              Show:
              { ' ' }
              { this.renderFilter('SHOW_ALL', 'All') }
              { ', ' }
              { this.renderFilter('SHOW_COMPLETED', 'Completed') }
              { ', ' }
              { this.renderFilter('SHOW_UNCOMPLETED', 'Active') } .
            </p>
        )
    }
}