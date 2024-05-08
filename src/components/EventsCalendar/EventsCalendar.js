import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./EventsCalendar.css"; 

const EventsCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="events-calendar">
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
};

render(<EventsCalendar />, document.getElementById("root"));
export default EventsCalendar;
