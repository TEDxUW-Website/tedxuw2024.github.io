import './Blogs.css';
import React, { useState, useEffect } from 'react';
import { Cloud, Cloud2 } from "../../assets";

const Blogs = () => {
    const redirect = (url) => {
        window.open(url, "_blank");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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

            <div className='blog1' onClick={() => redirect("https://medium.com/@tedxuw/4-ways-to-improve-your-public-speaking-with-tedx-talks-a3fe8a101a7e")}>
                <div className='blog1overlay'>
                    <div className='blogtitleright'>
                        4 Ways to Improve
                        Your Public Speaking with TEDx Talks
                    </div>
                    <div className='blogdateright'>
                        Aug 22, 2023
                    </div>
                    <div className='blogdescriptionright'>
                        In today’s interconnected world, effective public speaking is a skill of huge importance. Whether you are a student, a professional, an entrepreneur, or a community leader...
                    </div>
                </div>
            </div>

            <div className='blogrow2'>
                <div className='blogrow2col1'>
                    <div className='blog2' onClick={() => redirect("https://medium.com/@tedxuw/why-tedx-talks-bada1712804")}>
                        <div className='blog2overlay'>
                            <div className='blog2details'>
                                <div className='blogtitlebottom'>
                                    Why TEDx Talks?
                                </div>
                                <div className='blogdatebottom'>
                                    Jun 27, 2023
                                </div>
                                <div className='blogdescriptionbottom'>
                                    TEDx Talks have become a global phenomenon, captivating millions with their inspiring speakers and thought-provoking ideas. It’s no wonder your teachers in high...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blogrow2col2'>
                    <div className='blog3' onClick={() => redirect("https://medium.com/@tedxuw/ted-vs-tedx-talks-263958555de5")}>
                        <div className='blog3overlay'>
                            <div className='blogtitleright'>
                                TED vs 
                                TEDx Talks
                            </div>
                            <div className='blogdateright'>
                                Jul 20, 2023
                            </div>
                            <div className='blogdescriptionright'>
                                TED Talks and TEDx Talks are platforms created for sharing inspiring ideas and...
                            </div>
                        </div>
                    </div>
                    <div className='blog4' onClick={() => redirect("https://medium.com/@tedxuw/tedx-talks-you-should-binge-watch-instead-of-netflix-one-evening-3f8e89d0fe63")}>
                        <div className='blog4overlay'>
                            <div className='blogtitleright'>
                                TEDx Talks You Should Binge-Watch
                            </div>
                            <div className='blogdateright'>
                                Jun 1, 2023
                            </div>
                            <div className='blogdescriptionright'>
                                You’ve just wrapped up another productive day at school or work. You..
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='blogrow3'>
                <div className='blogrow3col1'>
                    <div className='blog5' onClick={() => redirect("https://medium.com/@tedxuw/5-reasons-to-attend-tedxuw-56f16d8f3e5a")}>
                        <div className='blog5overlay'>
                            <div className='blog2details'>
                                <div className='blogtitlebottom'>
                                    5 Reasons To Attend TEDxUW
                                </div>
                                <div className='blogdatebottom'>
                                    Feb 8, 2022
                                </div>
                                <div className='blogdescriptionbottom'>
                                    It’s that time of year again — our 2022 event, themed “2020 Vision,” is right around the corner. We know it’s been a hard year full...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blogrow3col2'>
                    <div className='blog6' onClick={() => redirect("https://medium.com/@tedxuw/who-should-you-nominate-to-become-a-tedxuw-speaker-bf253ae5f85a")}>
                        <div className='blog6overlay'>
                            <div className='blog2details'>
                                <div className='blogtitlebottom'>
                                    Who Should You Nominate To Become A TEDxUW Speaker?
                                </div>
                                <div className='blogdatebottom'>
                                    Aug 12, 2021
                                </div>
                                <div className='blogdescriptionbottom'>
                                    Here at TEDxUW, we are currently gearing up for our 2021 event. This means lots of...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;