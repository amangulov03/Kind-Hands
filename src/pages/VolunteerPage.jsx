// src/pages/VolunteerPage.js
import React from 'react';
import VolunteerForm from '../components/VolunteerForm';

function VolunteerPage() {
  return (
    <div>
      <div className="container">
      <h1 className='q'>Регистрация как волонтер</h1>
      <VolunteerForm />
      </div>
    </div>
  );
}

export default VolunteerPage;