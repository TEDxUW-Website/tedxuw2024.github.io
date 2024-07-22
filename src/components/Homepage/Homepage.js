import React, { useState } from 'react';
import "./Homepage.css";
import { TEDxLogo, Cloud, Cloud2 } from '../../assets';
import Lottie from 'react-lottie';
import shootingstar from './StarExplode.json';
import GrayWaves from '../../images/GrayWaves.svg';
import Speaker1 from '../../images/Speaker1.svg';

const Homepage = () => {
    const [animationFinished, setAnimationFinished] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: shootingstar,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <div className="wrapper">
                {!animationFinished &&
                    <Lottie options={defaultOptions}
                        style={{position: 'absolute', zIndex: 100000, top: -100, left: 0, width: '100%', height: '100vh'}}
                        eventListeners={[
                            {
                                eventName: 'complete',
                                callback: () => { setAnimationFinished(true) }
                            },
                        ]}
                    />
                }

                <div className="background"></div>
                <div className="background2"></div>
                <div className="mobilebackground"></div>
                <div className="mobileclouds"></div>
                <div className="desktopclouds"></div>

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
                
                <div className="clouds">
                    <img src={Cloud} alt="Cloud" className="cloud cloud1" />
                    <img src={Cloud} alt="Cloud" className="cloud cloud2" />
                    <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                    <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
                </div>

                <div className='whatisTedX'>
                    <div className='whatisTedXHeader'>
                        What is TEDxUW?
                    </div>
                    <div className='whatisTedXBody'>
                        Founded in 2011, TEDxUW is the University of Waterloo's official TEDx experience.
                        We aim to put the extended UW community onto a new type of global activity map that is being
                        watched, shared, and talked about by the world's top thought leaders.
                    </div>
                    <div className='whatisTedXBody2'>
                        With many of our Talks published on TED.com, YouTube, and other websites,
                        TEDxUW continually triggers innovation in all corners of the globe beyond our conference date.
                    </div>
                </div>

                <div className='speaker1'>
                    <img src={Speaker1} alt="speaker1" className="speaker1image" />
                </div>
            </div>
            <div className='graywaves'>
                <img src={GrayWaves} alt="graywaves" className="graywave" />

                <div className='impact'>
                    <div className='impactTitle'>Our Impact</div>
                    <div className='impactSubtitle'>Achievements of 2023</div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
