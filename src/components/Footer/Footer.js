import React from 'react'
import "./Footer.css"
import PastEventCard from '../PastEventCard/PastEventCard'
import { youtube, linkedin, x, ig, fb, mail, tedx_logo_footer, tedx_title_footer } from '../../assets'
import tedxTitleFooter from '../../assets/tedx_title_footer.jpg';

const Footer = () => {
    return (
        <footer>
            <div className='footer_content'>
                <div className='logos'>
                    <img src={tedxTitleFooter} alt="TEDx Title" className="title"></img>
                    <img src={tedx_logo_footer} alt="TEDx Logo" className="logo"></img>
                </div>
                <div className='timeline'>
                    <PastEventCard year="2016" text="Interconnectedness of Things" link="https://2016.tedxuw.com/"/>
                    <PastEventCard year="2017" text="Defying Conventions" link="https://2017.tedxuw.com/"/>
                    <PastEventCard year="2018" text="Making Waves" link="https://2018.tedxuw.com/" />
                    <PastEventCard year="2020" text="Press Play" link="https://tedxuw2.godaddysites.com/"/>
                    <PastEventCard year="2023" text="From the Ground Up"/>
                </div>
                <div className='socials'>
                    <a href="https://www.youtube.com/@TEDx" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="youtube" className="sm_icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/tedxuw/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="sm_icon"></img>
                    </a>
                    <a href="https://twitter.com/TEDxUW" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="x" className="sm_icon"></img>
                    </a>
                    <a href="https://www.instagram.com/tedxuw/" target="_blank" rel="noopener noreferrer">
                        <img src={ig} alt="ig" className="sm_icon"></img>
                    </a>
                    <a href="https://www.facebook.com/TEDxUW/" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="fb" className="sm_icon"></img>
                    </a>
                    <a href="mailto:outreach@tedxuw.com" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="email" className="sm_icon"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer