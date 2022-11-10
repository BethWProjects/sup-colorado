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
            <div className='details'>
            <div className='dest-details-container'>
                <div className='image-container'>
                    <Link to={'/'}>
                        <button className='details-home-button'>Home</button>
                    </Link>
                </div>
                <div className='details-container'>
                    <div className='details-section'>
                        <h3 className='details-title'>{dest.title}</h3>
                        <p className='details-type'>Type - {dest.type}</p>
                        <p className='details-pets'>Pets Allowed? - {dest.petsAllowed}</p>
                        <p className='details-boats'>Motorboats Allowed? - {dest.motorBoatsAllowed}</p>
                        <p className='details-cost'>Cost - {dest.cost}</p>
                        <p className='details-location'>Location - {dest.location}</p>
                        <p className='details-drive'>Drive time from Denver {dest.driveTimeFromDenver}</p>
                    </div>
                    <div className='overview-container'>
                        <p className='details-overview'>{dest.overview}</p>
                    </div>
                </div>
               
            </div>
                <img className='details-image' src={dest.image}/>
            </div>
        )

    }
}

export default SUPDetails