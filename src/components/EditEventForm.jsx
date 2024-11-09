// src/components/EditEventForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: '',
    location: '',
    date: '',
    volunteersCount: 0,
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const selectedEvent = storedEvents.find(event => event.id === Number(id));
    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = storedEvents.map(evt => evt.id === Number(id) ? event : evt);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    alert('Мероприятие обновлено!');
    navigate('/');
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="event-name" className="form-label">Название мероприятия</label>
        <input type="text" id="event-name" name="name" className="form-control" value={event.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="event-location" className="form-label">Местоположение</label>
        <input type="text" id="event-location" name="location" className="form-control" value={event.location} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="event-date" className="form-label">Дата мероприятия</label>
        <input type="date" id="event-date" name="date" className="form-control" value={event.date} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="volunteers-count" className="form-label">Количество волонтеров</label>
        <input type="number" id="volunteers-count" name="volunteersCount" className="form-control" value={event.volunteersCount} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Сохранить изменения</button>
    </form>
    </div>
  );
}

export default EditEventForm;