import React from 'react'

function Family({reino, familiaStatus, setFamilia}) {
  return (
    <div>
      {familiaStatus === "Vivos" && reino === "Reinos do Norte" 
          && <label>
              <span>Família: </span>
              <select onChange={({target: {value}}) => setFamilia(value)}>
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
      }
      {familiaStatus === "Algo aconteceu" && reino === "Reinos do Norte" 
          && <label>
              <span>Região: </span>
              <select onChange={({target: {value}}) => setFamilia(value)}>
                <option value="" />
                <option value="Dispersada pela guerra">Dispersada pela guerra.</option>
                <option value="Presos e perdidos">Presos</option>
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
      }
    </div>
  )
}

export default Family