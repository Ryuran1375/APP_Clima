import React, { useState, useEffect } from 'react';
import '../styles/AppHeader.css';

function AppHeader({ appName, onBackToMenu }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <header className="app-header">
      <button onClick={onBackToMenu} className="back-button">
        ← Volver al Menú
      </button>
      <h1 className="app-name">{appName}</h1>
      {user && <span className="user-label">{user.username}</span>}
    </header>
  );
}

export default AppHeader;
