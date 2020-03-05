import React from 'react';
// import { HomePage } from './pages';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DataContainer from './containers/DataContainer';

function App() {

  return (
    <DataContainer />
  );

}



export default App;

  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={HomePage} />
  //     <Route exact path="/" component={DataContainer} />
  //   </Switch>
  // </BrowserRouter>