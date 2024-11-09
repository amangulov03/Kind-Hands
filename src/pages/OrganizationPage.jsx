// src/pages/OrganizationPage.js
import React from 'react';
import EventForm from '../components/EventForm';

function OrganizationPage() {
  return (
    <div>
      <div className="container">
      <h1 className='q'>Регистрация мероприятия</h1>
      <EventForm />
      </div>
    </div>
  );
}

export default OrganizationPage;