import React from 'react'

function Witcher() {
  return (
    <div className="race-chosed">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="4"><h2>Vantagens: Bruxo / Witcher</h2></th>
          </tr>
          <tr>
            <th scope="col">Sentidos Melhorados</th>
            <th scope="col">Mutação Resiliente</th>
            <th scope="col">Emoções Dessensibilizadas</th>
            <th scope="col">Reflexos Relâmpago</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Não sofre penalidade de "Pouca luz". Ganha + 1 na perícia Consciência e a habilidade de rastrear por cheiro.</td>
            <td>Imune a doenças e capaz de utilizar mutagênicos.</td>
            <td>Não precisa realizar teste de coragem contra intimidação. Tem -4 em Empatia, não pode ser menos que 1.</td>
            <td>Ganha + 1 em Reflexo e Destreza, pode ser mais que 10.</td>
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

export default Witcher