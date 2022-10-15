import React from 'react'

function Elf() {
  return (
    <div className="race-chosed">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="3"><h2>Vantagens: ELFO</h2></th>
          </tr>
          <tr>
            <th scope="col">Artístico</th>
            <th scope="col">Atirador</th>
            <th scope="col">Sintonia com a Natureza</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+ 1 na perícia Belas Artes.</td>
            <td>+ 1 na perícia Arco e Flecha e podem sacar e colocar corda no arco sem contar como uma ação.</td>
            <td>Feras encontradas são amigáveis. Encontram também qualquer substância de planta comum (ou menos) que procurem, desde que a mesma exista no ambiente atual.</td>
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

export default Elf