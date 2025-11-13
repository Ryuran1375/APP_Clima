import React from 'react';
import '../styles/MainMenu.css';

function MainMenu({ username, onSelectApp, onLogout }) {
  const apps = [
    {
      id: 'weather',
      name: 'Clima',
      description: 'Consulta el clima y pronósticos en tiempo real',
      icon: '🌤️',
      color: '#3498db'
    },
    {
      id: 'users',
      name: 'Lista de Usuarios',
      description: 'Gestiona y visualiza usuarios',
      icon: '👥',
      color: '#e74c3c'
    },
    {
      id: 'cocktails',
      name: 'GlassofGod Cocktails',
      description: 'Descubre deliciosos cócteles',
      icon: '🍹',
      color: '#2b868d'
    }
  ];

  return (
    <div className="menu-container">
      <header className="menu-header">
        <div className="header-content">
          <h1>Mi Portal de Apps</h1>
          <div className="user-info">
            <span className="username">Bienvenido, <strong>{username}</strong></span>
            <button onClick={onLogout} className="logout-button">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="menu-main">
        <h2>Selecciona una aplicación</h2>
        <div className="apps-grid">
          {apps.map((app) => (
            <div
              key={app.id}
              className="app-card"
              style={{ borderTopColor: app.color }}
              onClick={() => onSelectApp(app.id)}
            >
              <div className="app-icon" style={{ backgroundColor: app.color }}>
                {app.icon}
              </div>
              <h3>{app.name}</h3>
              <p>{app.description}</p>
              <button className="access-button" style={{ backgroundColor: app.color }}>
                Acceder
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="menu-footer">
        <p>&copy; 2025 - Mi Portal de Apps. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default MainMenu;
