
// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';



function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Выход выполнен успешно!');
        window.location.href = '/';
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="profil">
      <h2>Личный кабинет</h2>
      {user ? (
        <div>
          <p>Имя: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button  onClick={handleLogout} className="btn btn-danger">Выйти</button>
        </div>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </div>
  );
}

export default UserProfile;