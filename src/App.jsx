import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log(data);
      })
      .catch((error) => {
        // Aquí puedes manejar los errores de la solicitud
        console.error(error);
      });
    // Limpia los campos del formulario después de enviar los datos
    setEmail('');
    setPassword('');
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Iniciar sesión</h2>
        <div className="login-form__field">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form__field">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-form__button1">
          Iniciar sesión
        </button>
        <hr />
        <button type="submit" className="login-form__button2">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
