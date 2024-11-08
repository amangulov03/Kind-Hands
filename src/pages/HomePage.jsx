// src/pages/HomePage.js
import React from 'react';
import EventList from '../components/EventList';

function HomePage() {
  return (
    <div>
      <h1>Список мероприятий</h1>
      <EventList />
    </div>
  );
}

export default HomePage;