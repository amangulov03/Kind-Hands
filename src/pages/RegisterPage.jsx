// src/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <div>
      <div className="container">
      <h1 className='q'>Регистрация</h1>
      <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;