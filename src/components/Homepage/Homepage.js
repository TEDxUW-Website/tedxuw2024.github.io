import React, { useState } from 'react'
import "./Homepage.css"
import { TEDxLogo, Cloud, Cloud2 } from '../../assets'
import Lottie from 'react-lottie'
import shootingstar from './StarExplode.json';

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
            <div className="clouds">
                <img src={Cloud} alt="Cloud" className="cloud cloud1" />
                <img src={Cloud} alt="Cloud" className="cloud cloud2" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
            </div>
                
            {!animationFinished &&
                <Lottie options={defaultOptions} 
                    style={{position: 'absolute', zIndex: 100000}}
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback: () => {setAnimationFinished(true)}
                        },
                    ]}
                />
            }
        </div>
    )
}

export default Homepage