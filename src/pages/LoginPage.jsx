// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div>
      <div className="container">
      <h1 className='q'>Вход</h1>
      <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;