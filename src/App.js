import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <h1>App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes> 
      </div>
      </BrowserRouter>
      
    );
  }
}
  

export default App;
