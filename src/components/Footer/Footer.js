import React from 'react'
import "./Footer.css"
import PastEventCard from '../PastEventCard/PastEventCard'
import { youtube, linkedin, x, ig, fb, mail, tedx_logo_footer, tedx_title_footer } from '../../assets'

const Footer = () => {
    return (
        <footer>
            <div className='footer_content'>
                <div className='logos'>
                    <img src={tedx_title_footer} alt="TEDx Title" className="title"></img>
                    <img src={tedx_logo_footer} alt="TEDx Logo" className="logo"></img>
                </div>
                <div className='timeline'>
                    <PastEventCard year="2016" text="Interconnectedness of Things" />
                    <PastEventCard year="2017" text="Defying Conventions" />
                    <PastEventCard year="2018" text="Making Waves" />
                    <PastEventCard year="2020" text="Press Play" />
                    <PastEventCard year="2023" text="From the Ground Up"/>
                </div>
                <div className='socials'>
                    <img src={youtube} alt="youtube" className="sm_icon"></img>
                    <img src={linkedin} alt="linkedin" className="sm_icon"></img>
                    <img src={x} alt="x" className="sm_icon"></img>
                    <img src={ig} alt="ig" className="sm_icon"></img>
                    <img src={fb} alt="fb" className="sm_icon"></img>
                    <img src={mail} alt="email" className="sm_icon"></img>
                </div>
            </div>
        </footer>
    )
}

export default Footer