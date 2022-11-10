import React, { Component } from 'react'
import './Filter.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredDestination: [],
            lake: null,
        }
    }
    render() {
        return(
            <div className='btn-container'>
                <button
                onClick={() => {
                    this.props.filteredDestination('lake')
                }}
                >
                    Lakes
                </button>
                <button
                onClick={() => {
                    this.props.filteredDestination('river')
                }}
                >
                    Rivers
                </button>
                <Link
                to={`/`}
                onClick={() => {
                    this.props.filteredDestination('')
                }}
                > 
                <button>Clear</button>
                </Link>
            </div>
        );
    }
}

export default Filter

Filter.propTypes = {
    filteredDestination: PropTypes.func
}