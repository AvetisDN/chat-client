import React, {useEffect} from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'

import Home from './views/Home';
import Room from './views/Room';

import {API_HEALTHCHECK} from './actions'

const App = () => {
  useEffect(() => {
    API_HEALTHCHECK();
  }, []);
  
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact render={ ( {history} ) => <Home history={history}/> } />
        <Route path='/room/:id' render={ ( {history, match} ) => <Room id={match.params.id} history={history}/> } />
      </Switch>
    </HashRouter>
  );
}

export default App;
