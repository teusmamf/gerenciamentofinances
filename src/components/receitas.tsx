import React, { useState } from 'react';

const Receitas: React.FC = () => {
  const [receitas, setReceitas] = useState<number[]>([]);
  const [valor, setValor] = useState('');

  const adicionarReceita = () => {
    setReceitas([...receitas, parseFloat(valor)]);
    setValor('');
  };

  return (
    <div>
      <h3>Adicionar Receita</h3>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor"
      />
      <button onClick={adicionarReceita}>Adicionar</button>

      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>{receita}</li>
        ))}
      </ul>
    </div>
  );
};

export default Receitas;
