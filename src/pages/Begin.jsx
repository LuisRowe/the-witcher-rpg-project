import React from 'react'
import { Link } from 'react-router-dom'

function Begin() {
  return (
    <main>
      <Link to='/charactercreate'>Criar personagem</Link>
      <Link to='/mycharacters'>Meus personagem</Link>
      <Link to='/creatures'>Criaturas</Link>
      <Link to='/adventure'>Aventura</Link>
    </main>
  )
}

export default Begin