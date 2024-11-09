// src/components/LoginForm.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Вход выполнен успешно!');
        window.location.href = '/';
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="backforms">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="login-email" className="form-label">Email</label>
        <input type="email" id="login-email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="login-password" className="form-label">Пароль</label>
        <input type="password" id="login-password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Войти</button>
      <div className="mt-3">
        <Link to="/register" className="btn btn-link">Зарегистрироваться</Link>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;