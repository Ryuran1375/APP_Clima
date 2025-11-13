import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import AppHeader from './components/AppHeader';
import WeatherApp from './apps/WeatherApp';
import UsersApp from './apps/UsersApp';
import CocktailsApp from './apps/CocktailsApp';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentApp, setCurrentApp] = useState(null);

  // Verificar si hay sesión guardada al cargar
  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      setCurrentUser(user.username);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (username) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentApp(null);
  };

  const handleSelectApp = (appId) => {
    setCurrentApp(appId);
  };

  const handleBackToMenu = () => {
    setCurrentApp(null);
  };

  // Si no está autenticado, mostrar login
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Si está autenticado pero no ha seleccionado app, mostrar menú
  if (!currentApp) {
    return (
      <MainMenu 
        username={currentUser} 
        onSelectApp={handleSelectApp}
        onLogout={handleLogout}
      />
    );
  }

  // Renderizar la app seleccionada
  return (
    <>
      <AppHeader 
        appName={getAppName(currentApp)}
        onBackToMenu={handleBackToMenu}
      />
      <div className="app-wrapper">
        {currentApp === 'weather' && <WeatherApp />}
        {currentApp === 'users' && <UsersApp />}
        {currentApp === 'cocktails' && <CocktailsApp />}
      </div>
    </>
  );
}

function getAppName(appId) {
  const names = {
    'weather': 'Mi Clima',
    'users': 'Lista de Usuarios',
    'cocktails': 'GlassofGod Cocktails'
  };
  return names[appId] || 'App';
}

export default App;
