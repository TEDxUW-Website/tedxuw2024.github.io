import React, {useState} from 'react'
import { faq_star } from '../../assets'
import './Question.css';

const Question = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`qanda ${isOpen ? 'open' : ''}`}>
        <div className="question-section">
            <div className='question'>{question}</div>
            <img src={faq_star} alt="Toggle Answer" onClick={() => setIsOpen(!isOpen)} className="star"/>
        </div>
        {isOpen && <p className='answer'>{answer}</p>}
    </div>
  )
}

export default Question