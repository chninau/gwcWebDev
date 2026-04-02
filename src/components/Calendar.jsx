import React from 'react';

const Calendar = () => {
  // access the env vars using import.meta.env
  const calendarId = import.meta.env.VITE_CALENDAR_ID;
  const encodedId = encodeURIComponent(calendarId);
  
  // this will generate embedded calendar view
  const calendarUrl = `https://calendar.google.com/calendar/embed?src=${encodedId}&ctz=America%2FNew_York`;

  return (
    <div className="calendar-wrapper" style={{ width: '100%', marginTop: '20px' }}>
      <iframe
        src={calendarUrl}
        style={{ border: '0', borderRadius: '8px' }}
        width="100%"
        height="600"
        title="GWC Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;