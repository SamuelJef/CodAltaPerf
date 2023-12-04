import React, { useState } from 'react';
import Auth from '../../../Services/auth'; // Importe o serviço de autenticação
import './FormSingup.css';


function FormSignup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const user = await Auth.register(username, email, password);
      console.log('Usuário cadastrado:', user);
      alert('Cadastro realizado com sucesso!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      alert('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className='formSing'>
      <div className='secForm'>
        <h2>Faça seu cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome de usuário:</label>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
          <label>Email:</label>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
          <label>Senha:</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default FormSignup;