// src/pages/ProfilePage.js
import React from 'react';
import UserProfile from '../components/UserProfile';

function ProfilePage() {
  return (
    <div>
      <div className="container">
      <h1 className='pr' >Профиль пользователя</h1>
      <UserProfile />
      </div>
    </div>
  );
}

export default ProfilePage;