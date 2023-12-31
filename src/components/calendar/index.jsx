import React from 'react'
import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Link } from 'react-router-dom';

const Calendar = () => {
  return (
    <>
    <Link to='/graph'>Move To Graph</Link>
    <Eventcalendar 
    data={[{
        start: new Date(),
        title: 'Today\'s event'
    }, {
        start: new Date(2020, 11, 18, 9, 0),
        end: new Date(2020, 11, 20, 13, 0),
        title: 'Multi day event'
    }]}
/>
    </>
  )
}

export default Calendar