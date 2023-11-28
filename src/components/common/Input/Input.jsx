import React from 'react';
import { Input } from './Input.styled';

export default props => {

const {value, setValue} = props

  const handleInputChange = (e) => {
    // Remove caracteres não numéricos e converte para número
    const novoValor = parseFloat(e.target.value.replace(/[^\d]/g, ''));

    // Se o valor não for um número válido, define como zero
    if (isNaN(novoValor)) {
        setValue(0);
    } else {
        setValue(novoValor / 100); // Divide por 100 para manter os dois dígitos decimais
    }
  };

  return (
    <div>
      <Input
        type="text"
        id="dinheiro"
        placeholder="R$ 0,00"
        value={value.toFixed(2)}
        onChange={handleInputChange}
      />
    </div>
  );
};