import React from 'react'

function Dwarf() {
  return (
    <div className="race-chosed">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="3"><h2>Vantagens: Anão</h2></th>
          </tr>
          <tr>
            <th scope="col">Durão</th>
            <th scope="col">Forte</th>
            <th scope="col">Olho de Artesão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ganha + 2 de PP (Poder de Parada), não sofrendo dano de ablação.</td>
            <td>Ganha + 1 na perícia Físico e aumenta em 25 seu Fardo.</td>
            <td>Ganha + 1 na perícia Negócios.</td>
          </tr>
        </tbody>
      </table>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Dwarf