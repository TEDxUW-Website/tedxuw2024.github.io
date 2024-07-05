import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../landingflow.json';

const LandingAnimation = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LandingAnimation;