import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from '../../routes/index';

function router({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"  component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default router;
