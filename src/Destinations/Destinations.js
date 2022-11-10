import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import './Destinations.css'


const Destinations = ( { destinations, filteredDestination }) => {
    let destCards;

    if (filteredDestination !== '') {
        destCards = destinations.filter((dest) => dest.type.toLowerCase().includes(filteredDestination))
    } else {
        destCards = destinations
    }

    const destinationData = destCards.map((dest) => {
        return (
            <Card 
                id={dest.id}
                key={dest.id}
                title={dest.title}
                image={dest.image}
                overview={dest.overview}
                type={dest.type}
                petsAllowed={dest.petsAllowed}
                motorBoatAllowed={dest.motorBoatAllowed}
                cost={dest.cost}
                location={dest.location}
                drivetimeFromDenver={dest.drivetimeFromDenver}


            />
        )
    });
    return <div className='destinations-container'>{destinationData}</div>
}


export default Destinations

Destinations.propTypes = {
    destinations: PropTypes.array,
    filteredDestination: PropTypes.string
}