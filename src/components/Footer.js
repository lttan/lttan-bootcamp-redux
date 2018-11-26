import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Show: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </div>
        );
    }
}