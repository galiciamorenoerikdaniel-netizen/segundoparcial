import React from 'react';

export default function Topbar() {
  return (
    <nav className="topbar">
      <div className="topbar-links">
        <a href="#dashboard" className="active">Dashboard</a>
        <a href="#team">Team</a>
        <a href="#projects">Projects</a>
        <a href="#calendar">Calendar</a>
        <a href="#reports">Reports</a>
      </div>
      {/* Foto perfil */}
      <img src="path_to_profile_photo.jpg" alt="Perfil" className="profile-photo" />
    </nav>
  );
}