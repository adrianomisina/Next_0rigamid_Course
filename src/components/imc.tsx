'use client'
import React, { useState } from 'react'

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const handleClick = () => {
    const alturaMetro = Number(altura) / 100
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)
    setImc(total)
  }

  return (
    <div>
      <label htmlFor="peso">Peso (em kg)</label>
      <input type="number" id="peso" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />

      <label htmlFor="altura">Altura (em cm)</label>
      <input type="number" id="altura" name="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />

      <button onClick={handleClick}>Calcular</button>
      <p>{imc}</p>
    </div>
  )
}

export default IMC