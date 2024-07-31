import React from 'react'
import './TalkPage.css'
import Talk from '../Talk/Talk.js';

const TalkPage = () => {
    const handleButtonClick = () => {
        window.open('https://www.youtube.com/@TEDx', '_blank');
    };
    return (
        <div className="talkpage-content">
            <p className="title">
                PAST TALKS
            </p>
            <div className='talks'>
                <Talk title="Success Isn’t Linear" speaker="Jordan Howlett"
                    url="https://www.youtube.com/embed/oKN1d6sremo" />
                <Talk title="I Draw Real World Inspiration from Things I Use to Escape from the Real World" speaker="Arda Ocal"
                    url="https://www.youtube.com/embed/2CJHCBLAeWo" />
                <Talk title="AI Will Set Education Back 2500 Years... And That’s a Good Thing" speaker="Robert Clapperton"
                    url="https://www.youtube.com/embed/ZcIkF4gLvsc" />
                <Talk title="Why you need to think like an entrepreneur when it comes to your career" speaker="Camelia Nunez"
                    url="https://www.youtube.com/embed/KF8ZResRLLs" />
                <Talk title="Taking Unreasonable Bets" speaker="Dhananja Jayalath"
                    url="https://www.youtube.com/embed/2Y8Y49nqiN0" />
                <Talk title="Achieving Excellence: One Choice & Three Practices" speaker="Anil Gupta"
                    url="https://www.youtube.com/embed/3Ez9Lm-0Qu8" />
            </div>
            <div>
                <button className="talks-button" onClick={handleButtonClick}>
                    View More Talks
                </button>
            </div>
        </div>
    )
}

export default TalkPage;