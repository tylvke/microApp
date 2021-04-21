import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Index from './page/index'
import About from './page/About'

const routes = () => {
  return (
    <Switch>
        <Route exact={true} path="/subapp/money">
          <Index />
        </Route>
        <Route path="/subapp/money/index">
          <Index />
        </Route>
        <Route path="/subapp/money/about">
          <About />
        </Route>
    </Switch>
  )
}

function registerApp(dep: any = {}): any {
  return {
      routes,
  };
}

export default registerApp;