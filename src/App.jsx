import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Verificar el nombre de usuario y la contraseña
    if (username === 'usuario' && password === 'contraseña') {
      setLoggedIn(true);
      alert('Inicio de sesión exitoso');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Bienvenido, {username}!</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    );
  }
};

export default Login;
