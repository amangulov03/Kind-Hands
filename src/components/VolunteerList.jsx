// src/components/VolunteerList.js
import React, { useEffect, useState } from 'react';

function VolunteerList() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const selectedEvent = events.find(event => event.id === Number(eventId));

    if (selectedEvent) {
      setVolunteers(selectedEvent.volunteers);
    }
  }, []);

  return (
    <div>
      <h2>Список волонтеров</h2>
      <ul>
        {volunteers.map((volunteer, index) => (
          <li key={index}>Имя: {volunteer.name}, Email: {volunteer.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerList;