import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/sobre" >Sobre</Link>
      </li>

      <li>
        <Link href="/imc" >IMC</Link>
      </li>
    </ul>
  )
}

export default Menu