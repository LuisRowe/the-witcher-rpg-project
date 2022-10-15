import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Elf from '../Component/Elf';
import Human from '../Component/Human';

function CharacterCreate() {
  const [race, setRace] = useState('Human');

  useEffect(() => {console.log(race)},[race])

  return (
    <form>
      <label className="race-select">
        Raça
        <select 
          onChange={({target: {value}}) => setRace(value)}
        >
          <option value="Human">Humano</option>
          <option value="Elf">Elfo</option>
          <option value="anao">Anão</option>
          <option value="bruxo">Bruxo</option>
        </select>
      </label>
      {race === "Human" && <Human />}
      {race === "Elf" && <Elf />}
    </form>
  )
}

export default CharacterCreate