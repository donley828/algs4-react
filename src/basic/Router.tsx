import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layouts from './Layouts';

import LinkedList from '../views/linked-list';

export default function AppRouter() {
  return (
    <Router>
      <Layouts>
        <Switch>
          <Route path={'/linked-list'}>
            <LinkedList></LinkedList>
          </Route>
        </Switch>
      </Layouts>
    </Router>
  );
}
