import React from 'react'
import "./Header.css"
import { TEDxLogo } from '../../assets'

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="mainText">
                    <div className="title">
                        <h1>In The Odd Chance</h1>
                    </div>
                    <div className="subtitle">
                        <img src={TEDxLogo} alt="TEDx Logo" className="tedxLogo"></img>
                        <div className="info">
                            <p>Date</p>
                            <p>Time</p>
                            <p>Location</p>
                        </div>
                    </div>
                </div>  
            </div>
        </header>
    )
}

export default Header