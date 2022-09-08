import React from 'react'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = () => {

  }

  render () {
    const { name } = this.state
    return (
      <form>
        <label>
          Nome do jogo
          <input type="text" value={name} />
        </label>
        <button type='submit'>Entrar</button>
      </form>
    )
  }
}

export default Home
