import './Blogs.css';
import React, { useState, useEffect } from 'react';
import { Cloud, Cloud2 } from "../../assets";

const Blogs = () => {
    return(
        <div className='blogs'>
            <div className="background"></div>
            <div className="mobilebackground"></div>
            <div className="desktopclouds"></div>
            <div className="title">BLOG</div>

            <div className="clouds">
                <img src={Cloud} alt="Cloud" className="cloud cloud1" />
                <img src={Cloud} alt="Cloud" className="cloud cloud2" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
            </div>

            <div className='blog1'></div>

            <div className='blogrow2'>
                <div className='blogrow2col1'>
                    <div className='blog2'></div>
                </div>
                <div className='blogrow2col2'>
                    <div className='blog3'></div>
                    <div className='blog4'></div>
                </div>
            </div>

            <div className='blogrow3'>
                <div className='blogrow3col1'>
                    <div className='blog5'></div>
                </div>
                <div className='blogrow3col2'>
                    <div className='blog6'></div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;