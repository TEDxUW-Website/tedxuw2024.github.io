import React from 'react'
import './Talk.css'

const Talk = ({ title, speaker, url }) => {
    return (
        <div className='talk-content'>
            <div className='iframe-container'>
                <iframe
                    src={url}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                ></iframe>
            </div>
        </div>
    )
}

export default Talk