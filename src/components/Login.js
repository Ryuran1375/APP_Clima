import React, { useState } from 'react';
import '../styles/Login.css';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Validación simple de credenciales
    if (!username.trim()) {
      setError('El usuario es obligatorio');
      return;
    }

    if (!password.trim()) {
      setError('La contraseña es obligatoria');
      return;
    }

    // Credenciales de ejemplo
    const validUsers = {
      'admin': 'admin123',
      'user': 'user123',
      'test': 'test123'
    };

    if (validUsers[username] && validUsers[username] === password) {
      localStorage.setItem('currentUser', JSON.stringify({ 
        username: username,
        loginTime: new Date().toLocaleString()
      }));
      onLoginSuccess(username);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Mi Portal de Apps</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="form-input"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
