import React, { useState, useEffect } from 'react';
import "./Homepage.css";
import { TEDxLogo, Cloud, Cloud2 } from '../../assets';
import Lottie from 'react-lottie';
import shootingstar from './StarExplode.json';
import GrayWaves from '../../images/GrayWaves.svg';
import Speaker1 from '../../images/Speaker1.svg';
import RedWaves from '../../images/red waves.svg';
import FriendsPic from '../../images/2buddies.svg';
import ImageCarousel from '../Carousel/Carousel';

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

                <div className='graywavecontent'>   
                    <div className='impact'>
                        <div className='impactTitle'>Our Impact</div>
                        <div className='impactSubtitle'>Achievements of 2023</div>
                    </div>
                </div>

                <div className='centerStats'>
                    <div className="statistics-container">
                        <div className="col-stat-block delegatespots" style={{marginRight: "1vw", marginBottom: "1vw", paddingTop: "1vw"}}>
                            <div className="stat-number">100</div>
                            <div className="stat-label">Exclusive Delegate Spots</div>
                        </div>
                        <div className='col2stats'>
                            <div className="row-stat-block" style={{paddingTop: "2vw", paddingBottom: "2vw"}}>
                                <div className="stat-number7" style={{marginRight: "2vw"}}>7</div>
                                <div className="stat-label">Fantastic TED Speakers</div>
                            </div>
                            <div className="row-stat-block" style={{marginTop: "1vw", marginBottom: "1vw", paddingRight: "2vw", paddingBottom: "2vw", paddingTop: "2vw"}}>
                                <div className="stat-number25" style={{marginRight: "2vw"}}>25</div>
                                <div className="stat-label">Amazing organizers to make it happen</div>
                            </div>
                        </div>
                        <div className="row-stat-block" style={{paddingTop: "1vw", paddingBottom: "1vw", paddingRight: "5.5vw", zIndex: 1003, position: "relative"}}>
                            <div className="stat-number" style={{marginRight: "3vw"}}>$8580+</div>
                            <div className="stat-label">in sponsorship money</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='redwaves'>
                <img src={RedWaves} alt="redwaves" className="redwave" />

                <div className='redwavescontent'>
                    <div className='friendspic'>
                        <img src={FriendsPic} alt="speaker1" className="friendsimage" />
                    </div>

                    <div className='gallery'>
                        <div className='gallerytitle'>2023 Gallery</div>
                        <div className='gallerysubtitle'>A trip down memory lane...</div>
                    </div>

                    <div className="background3"></div>
                    <div className="background3"></div>
                    
                    <div className='carousel'>
                        <ImageCarousel />
                    </div>

                    <div className='ourmission'>
                        <div className='ourmissionHeader'>
                            Our Mission
                        </div>
                        <div className='ourmissionBody'>
                            To unite the brightest minds within the University of Waterloo community 
                            to create an environment where change-makers can share their ideas and achievements with the world.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
