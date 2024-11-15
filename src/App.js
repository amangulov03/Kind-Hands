// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import OrganizationPage from './pages/OrganizationPage';
import VolunteerPage from './pages/VolunteerPage';
import FeedbackPage from './pages/FeedbackPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import EditEventForm from './components/EditEventForm';
import EventList from "./components/EventList";
import EventForm from './components/EventForm.jsx';
import VolunteerForm from './components/VolunteerForm.jsx';
import VolunteerList from './components/VolunteerList.jsx';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organization" element={<OrganizationPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit-event/:id" element={<EditEventForm />} />
        <Route path="/eventList" element={<EventList />} />
        <Route path="/eventForm" element={<EventForm />} />
        <Route path="/volunteerForm" element={<VolunteerForm />} />
        <Route path="/volunteerList" element={<VolunteerList />} />
      </Routes>
    </Router>
  );
}

export default App;