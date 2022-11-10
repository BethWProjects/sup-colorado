import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ title, image, type, id}) => {
    return (
        <Link to={`/${id}`} className='card'  >
            <img className='image' src={image} alt={`image of ${title}`} />
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-type'>{type}</h2>
        </Link>
    )
}

export default Card

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number
}