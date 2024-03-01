import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página sobre.'
};


const Sobre = () => {
  return (
    <main>
      <h2>Sobre</h2>
      <h2 id="empresa" style={{margin: '1600px 0'}}>A Empresa</h2>
    </main>
  )
}

export default Sobre