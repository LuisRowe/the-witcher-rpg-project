import React from 'react'

function Human() {
  return (
    <div className="race-chosed">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="3"><h2>Vantagens: HUMANO</h2></th>
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
    </div>
  )
}

export default Human