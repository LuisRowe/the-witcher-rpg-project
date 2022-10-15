import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Home() {
  const [name, setName] = useState('');
  const { push } = useHistory();

  return (
    <main>
      <form onSubmit={() => push('/begin')}>
        <label>
          Nome do grupo:
          <input 
            type="text" 
            name="nome" 
            value={name}
            onChange={({target:{ value }}) => setName(value) }
          />
        </label>
        <button type='submit'>
          Entrar
        </button>
      </form>
    </main>
  )
}

export default Home