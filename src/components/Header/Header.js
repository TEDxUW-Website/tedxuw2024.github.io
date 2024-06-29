import React, { useState } from 'react'
import "./Header.css"
import { TEDxLogo } from '../../assets'
import Lottie, { eventListeners, options } from 'react-lottie'
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
        <header style={{height: '100vh', width: '100vw'}}>
            <div className="wrapper" style={{height: '100%', width: '100%'}}>
                {animationFinished ? (
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
                ) : (
                    <>
                    <Lottie options={defaultOptions} height={'100%'} width={'100%'} 
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback: () => {
                                console.log('the animation completed:')
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