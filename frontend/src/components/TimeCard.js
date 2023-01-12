import React from 'react'
import '../css/PaymentForm.css'
import { BlueClock } from '../images/BlueClock';
import { Clock } from '../images/Clock';

function TimeCard({time, setSelectedGroup, selectedGroup, date, index, setMeetingTime, onClick}) {
  return (
       <div className="scheduled-time-card" onClick={onClick}>
            {selectedGroup === index ? <BlueClock /> : <Clock />}
            <div className="date-time">
                <h5> {date} </h5>
                <small>{time} </small>
            </div>
       </div>
  );
}

export default TimeCard