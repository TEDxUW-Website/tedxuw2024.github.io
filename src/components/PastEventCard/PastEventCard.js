import React from 'react';
import './PastEventCard.css';

const PastEventCard = ({ year, text }) => {
  return (
    <div className="card-container">
      <div className="year-box">{year}</div>
      <div className="text-box">{text}</div>
    </div>
  );
};

export default PastEventCard;
