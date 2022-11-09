import React from 'react'
import './Card.css'

const Card = ({ title, image, type, id}) => {
    return (
        <div className='card'  >
            <img className='image' src={image} alt={`image of ${title}`} />
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-type'>{type}</h2>
        </div>
    )
}

export default Card