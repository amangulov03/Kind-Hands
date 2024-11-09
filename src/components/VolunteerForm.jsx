// src/components/VolunteerForm.js
import React, { useState, useEffect } from 'react';

function VolunteerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventId, setEventId] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedEvent = events.find(event => event.id === Number(eventId));

    if (selectedEvent && selectedEvent.volunteersCount > 0) {
      selectedEvent.volunteers.push({ name, email });
      selectedEvent.volunteersCount--;
      localStorage.setItem('events', JSON.stringify(events));
      alert('Вы успешно записались на мероприятие!');
      sendConfirmationEmail(email, selectedEvent.name);
      window.location.href = '/';
    } else {
      alert('Нет свободных мест на мероприятие.');
    }
  };

  const sendConfirmationEmail = (email, eventName) => {
    alert(`Подтверждение отправлено на ${email} для мероприятия "${eventName}".`);
  };

  return (
    <div className="backforms">

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="volunteer-name" className="form-label">Ваше имя</label>
        <input type="text" id="volunteer-name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="volunteer-email" className="form-label">Ваш Email</label>
        <input type="email" id="volunteer-email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="event-select" className="form-label">Выберите мероприятие</label>
        <select id="event-select" className="form-select" value={eventId} onChange={(e) => setEventId(e.target.value)} required>
          {events.map(event => (
            <option key={event.id} value={event.id}>{event.name} - {event.date}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Записаться на мероприятие</button>
    </form>
    </div>
  );
}

export default VolunteerForm;