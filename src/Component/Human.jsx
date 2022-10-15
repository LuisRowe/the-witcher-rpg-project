import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Family from './Family';
import Origin from './Origin';

function Human() {
  const [nome, setNome] = useState('');
  const [reino, setReino] = useState('Reinos do Norte');
  const [regiao, setRegiao] = useState('');
  const [familiaStatus, setFamiliaStatus] = useState('Vivos');
  const [familia, setFamilia] = useState('');

  const race = 'Humano';

  useEffect(() => {
    const charObj = {
      nome,
      race,
      reino,
      regiao,
      familiaStatus,
      familia,
    };
    console.log(charObj);
  },[nome, reino, regiao, familiaStatus, familia])

  return (
    <div className="race-chosed">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="3"><h2>Vantagens: Humano</h2></th>
          </tr>
          <tr>
            <th scope="col">Confiável</th>
            <th scope="col">Ingenuidade</th>
            <th scope="col">Cegamente Teimoso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+ 1 em testes de: carisma, sedução e persuasão contra outros humanos.</td>
            <td>+ 1 em dedução.</td>
            <td>Rerolar uma jogada fracassada de Resistir Coerção ou Coragem por três vezes, ficando com o maior resultado, em uma sessão.</td>
          </tr>
        </tbody>
      </table>
      <div>
        <label>
          <span>Nome: </span>
          <input type="text" value={nome} onChange={({target: {value}}) => setNome(value)}/>
        </label>
        <hr />
        <label>
          <span>Reino: </span>
          <select onChange={({target: {value}}) => setReino(value)}>
            <option value="Reinos do Norte">Reinos do Norte</option>
            <option value="Nilfgaard">Nilfgaard</option>
          </select>
        </label>
        <hr />
        <Origin reino={reino} setRegiao={(value) => setRegiao(value)} />
        <hr />
        <label>
          <span>Família: </span>
          <select onChange={({target: {value}}) => setFamiliaStatus(value)}>
            <option value="Vivos">Vivos</option>
            <option value="Algo aconteceu">Algo aconteceu</option>
          </select>
        </label>
        <hr />
        <Family reino={reino} familiaStatus={familiaStatus} setFamilia={(value) => setFamilia(value)} />
        <hr />
      </div>
    </div>
  )
}

export default Human