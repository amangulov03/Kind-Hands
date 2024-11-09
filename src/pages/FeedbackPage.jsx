// src/pages/FeedbackPage.js
import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

function FeedbackPage() {
  return (
    <div>
      <div className="container">
      <h1 className='q'>Обратная связь</h1>
      <FeedbackForm />
      </div>
    </div>
  );
}

export default FeedbackPage;