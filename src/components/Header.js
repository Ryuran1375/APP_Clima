import React, { useState, useEffect } from 'react';

const Header = ({ onSearch, currentCity }) => {
  const [inputCity, setInputCity] = useState(currentCity);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    setInputCity(currentCity);
  }, [currentCity]);

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      onSearch(inputCity.trim());
    }
  };

  return (
    <header className="app-header">
      <h2>Consulta del Clima</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ej: Cancún, MX o Paris"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '8px' }}>
          <button type="submit">Buscar</button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Cambiar tema claro/oscuro"
            title="Cambiar tema"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 2.05l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17 13h3v-2h-3v2zM6.76 19.16l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79zM12 17a5 5 0 100-10 5 5 0 000 10zm4.24 2.84l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12.43 2.3a9 9 0 1010.97 10.97 7 7 0 01-10.97-10.97z" />
              </svg>
            )}
          </button>
        </div>
      </form>
      <p>
        Buscando clima en: <strong>{currentCity}</strong>
      </p>
    </header>
  );
};

export default Header;