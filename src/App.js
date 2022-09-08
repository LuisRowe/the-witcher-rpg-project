import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SelectChar from './pages/SelectChar'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
        <h1>App</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/select" element={<SelectChar />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      </BrowserRouter>

    )
  }
}

export default App
