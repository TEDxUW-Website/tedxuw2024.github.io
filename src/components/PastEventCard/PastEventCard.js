import React, { useState, useEffect } from 'react';
import './PastEventCard.css';

const getYearBackground = (year) => {
  switch (year) {
    case "2016":
      return { background: 'linear-gradient(90deg, #000 0%, #4F3138 100%)' };
    case "2017":
      return { background: 'linear-gradient(90deg, #4F3138 0%, #70303D 100%)' };
    case "2018":
      return { background: 'linear-gradient(90deg, #70303D 0%, #902B3F 100%)' };
    case "2020":
      return { background: 'linear-gradient(90deg, #902B3F 0%, #B0233C 100%)' };
    case "2023":
      return { background: 'linear-gradient(90deg, #CE1534 0%, #EB0028 100%)' };
    default:
      return { background: 'linear-gradient(90deg, #CE1534 0%, #EB0028 100%)' };
  }
};

const getTextBackground = (year) => {
  switch (year) {
    case "2016":
      return { background: 'linear-gradient(180deg, #2A2A2A 0%, #4F3138 126.56%), #D9D9D9' };
    case "2017":
      return { background: 'linear-gradient(180deg, #4F3138 19.44%, #70303D 100%), #D9D9D9' };
    case "2018":
      return { background: 'linear-gradient(180deg, #70303D 19.44%, #902B3F 100%), #D9D9D9' };
    case "2020":
      return { background: 'linear-gradient(180deg, #892C3F 19.44%, #B0233C 100%), #D9D9D9' };
    case "2023":
      return { background: 'linear-gradient(180deg, #A9253D 19.44%, #EB0028 100%), #D9D9D9' };
    default:
      return { background: 'linear-gradient(180deg, #A9253D 19.44%, #EB0028 100%), #D9D9D9;' };
  }
};


const PastEventCard = ({ year, text, link }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="card-container" style={isMobile ? getTextBackground(year) : {}}>
        {isMobile ? (
          <>
            <div className="mobile-year-box">{year}</div>
            <div className="mobile-text-box">{text}</div>
          </>
        ) : (
          <>
            <div className="year-box" style={getYearBackground(year)}>{year}</div>
            <div className="text-box">{text}</div>
          </>
        )}
      </div>
    </a>
  );
};

export default PastEventCard;
