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
            console.log("supdetails", data)
            const destMatch = await data.destination.find(dest => dest.id === Number(this.props.destId));
            this.setState({ destination: destMatch, loading: false })   
        } catch (error) {
            this.setState({ error: "Sorry, no paddle locations available.  Please try again another time!"})
        }
    }

    filteredDestination = (input) => {
        this.setState({ filteredDestination: input})
      }

    render() {
        const dest = this.state.destination;
        return (
            <div className='dest-details-container'>
                <h1>SUP Colorado</h1>
                <h3>{this.state.destination.title}</h3>
            </div>
        )

    }
}

export default SUPDetails