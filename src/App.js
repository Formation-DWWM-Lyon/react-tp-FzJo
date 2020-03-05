import React from 'react';
import './App.css';
import DataContainer from './containers/DataContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DataContainer} />
    </Switch>
  </BrowserRouter>
  ;

export default App;

{/* <DataContainer /> */ }
