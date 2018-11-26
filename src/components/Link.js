import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { active, children, onClick } = this.props;

        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{
                    marginLeft: '4px'
                }}
            >
                {children}
            </button>
        )
    }
}