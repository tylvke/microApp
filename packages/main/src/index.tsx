import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './registerWindow';
import './single-spa-config';
import AsyncComponent from './asyncComponent';
render(
  <div>
    <h1>微前端</h1>
    <h2>
      <a href="/#/react">react</a>
    </h2>
    <h2>
      <a href="/#/vue">vue</a>
    </h2>
    <h2>
      <a href="/#/subapp">subapp</a>
    </h2>

    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/subapp" component={AsyncComponent} />
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById('app')
);
