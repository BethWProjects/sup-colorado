import React, { Component } from 'react'
import { fetchDestinations } from '../apiCalls'
import { Link } from 'react-router-dom'
import './SUPDetails.css'

class SUPDetails extends Component {
    constructor() {
        super()
        this.state = {
            destination: {}
        }
    }

    componentDidMount = async () => {
        try { const destList = await fetchDestinations();
            const data = await destList.json();
            const destMatch = await data.find(dest => dest.id === Number(this.props.pathId));
            this.setState({ destination: destMatch, loading: false })   
        } catch (error) {
            this.setState({ error: "Sorry, no paddle locations available.  Please try again another time!"})
        }
    }

    filteredDestination = (input) => {
        this.setState({ filteredDestination: input})
      }

    render() {
        return (
            <div>SUPDetails</div>
        )

    }
}

export default SUPDetails