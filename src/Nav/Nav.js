import React from 'react'
import './Nav.css'
import paddleLogo from '../images/paddleboard.svg'


const Nav = () => {
    return (
        <div className='nav-container'>
            <img className='paddleLogo' src={paddleLogo} alt="paddleboard logo with mountain background" />
            <div className='title-div'>
                <h1 className='title'>SUP Colorado</h1>
                <p className='tagline'>...like walking on water, only better</p>
            </div>
        </div>
    )
}

export default Nav