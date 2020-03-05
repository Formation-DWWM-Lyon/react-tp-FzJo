import React from 'react';
import './App.css';
import DataContainer from './containers/DataContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profil from './components/Profil';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DataContainer} />
      <Route exact path="/profil" component={Profil} />
    </Switch>
  </BrowserRouter>
  ;

export default App;
