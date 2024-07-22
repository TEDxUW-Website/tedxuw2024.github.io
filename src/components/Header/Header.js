import React, { useState } from 'react'
import "./Header.css"
import { TEDxLogo, Cloud, Cloud2, Cloud3 } from '../../assets'
import Lottie from 'react-lottie'
import shootingstar from './TEDx-star.json';

const Header = () => {
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
        <header>
            <div className="wrapper">
                {animationFinished ? (
                    <>
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
                        <img src={Cloud3} alt="Cloud" className="cloud cloud1" />
                        <img src={Cloud} alt="Cloud" className="cloud cloud2" />
                        <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                        <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
                    </div>
                    </> 
                ) : (
                    <>
                    <Lottie options={defaultOptions} 
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback: () => {
                                console.log('the animation completed:');
                                console.log('Screen Width:', window.innerWidth, 'px');
                                console.log('Screen Height:', window.innerHeight, 'px');
                                setAnimationFinished(true)
                                
                            }
                        },
                      ]}/>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header