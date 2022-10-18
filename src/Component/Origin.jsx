import React from 'react'

function Origin({reino, setRegiao}) {
  return (
    <div>
      {reino === "Reinos do Norte" 
          ? <label>
              <span>Região: </span>
              <select onChange={({target: {value}}) => setRegiao(value)}>
                <option value="" />
                <option value="Redânia">Redânia (+ 1 Educação)</option>
                <option value="Kaedwen">Kaedwen (+ 1 Tolerância)</option>
                <option value="Teméria">Teméria (+ 1 Carisma)</option>
                <option value="Aedirn">Aedirn (+ 1 Criar (Itens))</option>
                <option value="Lyria e Rívia">Lyria e Rívia (+ 1 Resistir Coerção)</option>
                <option value="Kovir e Poviss">Kovir e Poviss (+ 1 Negócios)</option>
                <option value="Skellige">Skellige (+ 1 Coragem)</option>
                <option value="Cidaris">Cidaris (+ 1 Velejar)</option>
                <option value="Verden">Verden (+ 1 Sobrevivência no Ermo)</option>
                <option value="Cintra">Cintra (+ 1 Percepção Humana)</option>
              </select>
          </label>
          : <label>
              <span>Região: </span>
              <select onChange={({target: {value}}) => setRegiao(value)}>
                <option value="" />
                <option value="Vicovaro">Vicovaro (+ 1 Educação)</option>
                <option value="Angren">Angren (+ 1 Sobrevivência no Ermo)</option>
                <option value="Nazair">Nazair (+ 1 Brigar)</option>
                <option value="Mettina">Mettina (+ 1 Cavalgar)</option>
                <option value="Mag Turga">Mag Turga (+ 1 Tolerância)</option>
                <option value="Geso">Geso (+ 1 Furtividade)</option>
                <option value="Ebbing">Ebbing (+ 1 Dedução)</option>
                <option value="Maecht">Maecht (+ 1 Carisma)</option>
                <option value="Gemmera">Gemmera (+ 1 Intimidação)</option>
                <option value="Etólia">Etólia (+ 1 Coragem)</option>
              </select>
            </label>
      }
    </div>
  )
}

export default Origin