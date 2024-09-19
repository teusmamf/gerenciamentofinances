import React from 'react';
import Navbar from '../components/Navbar'; 
const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p>Este aplicativo permite que você gerencie suas receitas e despesas mensais.</p>
    </div>
  );
};

export default Home;
