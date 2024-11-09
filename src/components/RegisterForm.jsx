// src/components/RegisterForm.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name
        }).then(() => {
          alert('Регистрация выполнена успешно!');
          navigate('/');
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="backforms">

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="register-name" className="form-label">Имя</label>
        <input type="text" id="register-name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="register-email" className="form-label">Email</label>
        <input type="email" id="register-email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="register-password" className="form-label">Пароль</label>
        <input type="password" id="register-password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
    </div>
  );
}

export default RegisterForm;