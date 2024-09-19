import React, { useState } from 'react';
import { createUser, loginUser } from '../utilities/db'; 
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginUser(email, password);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.success ?? ''); 
      navigate('/dashboard'); 
    }
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const result = createUser(email, password);
    if (result.error) {
      setMessage(result.error);
    } else if (result.user) {
      setMessage(`${result.success}. ID do usuário: ${result.user.id}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleCreateUser}>Criar Usuário</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
