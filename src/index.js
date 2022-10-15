import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Begin from './pages/Begin';
import CharacterCreate from './pages/CharacterCreate';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/begin' component={ Begin } />
      <Route exact path='/characterCreate' component={ CharacterCreate } />
      <Route exact path='/' component={ Home } />
    </Switch>
  </BrowserRouter>
);
