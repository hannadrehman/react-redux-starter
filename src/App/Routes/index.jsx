import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import ErrorHandler from './ErrorHandler';

// import AsyncComponentLoader from './AsyncComponentLoader';

import './styles.scss';

// dynamic component loading. will create a seperate bundle for each component
// saves bundle huge sizes
// const HomeComponent = AsyncComponentLoader
// (() => import(/* webpackChunkName: 'home' */ './Home'));
// const LoginComponent = AsyncComponentLoader
// (() => import(/* webpackChunkName: 'login' */ './Login'));

const Routes = () => (
  <article className="routes_wrapper">
    <ErrorHandler>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </ErrorHandler>
  </article>
);

export default withRouter(Routes);
