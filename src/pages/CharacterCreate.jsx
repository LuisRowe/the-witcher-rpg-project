import React from 'react'
import { useState } from 'react'
import Dwarf from '../Component/Dwarf';
import Elf from '../Component/Elf';
import Human from '../Component/Human';
import Witcher from '../Component/Witcher';

function CharacterCreate() {
  const [race, setRace] = useState('Human');

  return (
    <form>
      <label className="race-select">
        <span>Raça: </span>
        <select 
          onChange={({target: {value}}) => setRace(value)}
        >
          <option value="Human">Humano</option>
          <option value="Elf">Elfo</option>
          <option value="Dwarf">Anão</option>
          <option value="Witcher">Bruxo</option>
        </select>
      </label>
      {race === "Human" && <Human />}
      {race === "Elf" && <Elf />}
      {race === "Dwarf" && <Dwarf />}
      {race === "Witcher" && <Witcher />}
    </form>
  )
}

export default CharacterCreate