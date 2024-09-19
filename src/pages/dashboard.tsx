import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
  
  const [receitas, setReceitas] = useState<number[]>(() => {
    const storedReceitas = localStorage.getItem('receitas');
    return storedReceitas ? JSON.parse(storedReceitas) : [];
  });
  const [despesas, setDespesas] = useState<number[]>(() => {
    const storedDespesas = localStorage.getItem('despesas');
    return storedDespesas ? JSON.parse(storedDespesas) : [];
  });
  const [novaReceita, setNovaReceita] = useState('');
  const [novaDespesa, setNovaDespesa] = useState('');


  const saveReceitasToLocalStorage = (updatedReceitas: number[]) => {
    localStorage.setItem('receitas', JSON.stringify(updatedReceitas));
  };

 
  const saveDespesasToLocalStorage = (updatedDespesas: number[]) => {
    localStorage.setItem('despesas', JSON.stringify(updatedDespesas));
  };

  const adicionarReceita = () => {
    const valorReceita = parseFloat(novaReceita);
    if (!isNaN(valorReceita) && valorReceita > 0) {
      const updatedReceitas = [...receitas, valorReceita];
      setReceitas(updatedReceitas);
      saveReceitasToLocalStorage(updatedReceitas);
      setNovaReceita('');
    }
  };

  const adicionarDespesa = () => {
    const valorDespesa = parseFloat(novaDespesa);
    if (!isNaN(valorDespesa) && valorDespesa > 0) {
      const updatedDespesas = [...despesas, valorDespesa];
      setDespesas(updatedDespesas);
      saveDespesasToLocalStorage(updatedDespesas);
      setNovaDespesa('');
    }
  };

  const data = [
    { name: 'Receitas', value: receitas.reduce((acc, cur) => acc + cur, 0) },
    { name: 'Despesas', value: despesas.reduce((acc, cur) => acc + cur, 0) },
  ];

  const COLORS = ['#36A2EB', '#FF6384'];

  return (
    <div>
      {}
      <Navbar />

      <h2>Dashboard</h2>

      <div>
        <h3>Adicionar Receita</h3>
        <input
          type="number"
          value={novaReceita}
          onChange={(e) => setNovaReceita(e.target.value)}
          placeholder="Valor da Receita"
        />
        <button onClick={adicionarReceita}>Adicionar Receita</button>
      </div>

      <div>
        <h3>Adicionar Despesa</h3>
        <input
          type="number"
          value={novaDespesa}
          onChange={(e) => setNovaDespesa(e.target.value)}
          placeholder="Valor da Despesa"
        />
        <button onClick={adicionarDespesa}>Adicionar Despesa</button>
      </div>

      <h3>Resumo</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
