import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ErrorHandler from './ErrorHandler';

import AsyncComponentLoader from './AsyncComponentLoader';

import './styles.scss';

// dynamic component loading. will create a seperate bundle for each component
// saves bundle huge sizes
const HomeComponent = AsyncComponentLoader(() => import(/* webpackChunkName: 'home' */ './Home'));
const LoginComponent = AsyncComponentLoader(() => import(/* webpackChunkName: 'login' */ './Login'));


const Routes = () => (
  <article className="routes_wrapper">
    <ErrorHandler>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/login" component={LoginComponent} />
      </Switch>
    </ErrorHandler>
  </article>
);

export default withRouter(Routes);
