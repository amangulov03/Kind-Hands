// src/components/EventForm.js
import React, { useState } from 'react';

function EventForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [volunteersCount, setVolunteersCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      name,
      location,
      date,
      volunteersCount: Number(volunteersCount),
      volunteers: []
    };

    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    alert('Мероприятие создано!');
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="event-name" className="form-label">Название мероприятия</label>
        <input type="text" id="event-name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="event-location" className="form-label">Местоположение</label>
        <input type="text" id="event-location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="event-date" className="form-label">Дата мероприятия</label>
        <input type="date" id="event-date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="volunteers-count" className="form-label">Количество волонтеров</label>
        <input type="number" id="volunteers-count" className="form-control" value={volunteersCount} onChange={(e) => setVolunteersCount(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Создать мероприятие</button>
    </form>
  );
}

export default EventForm;