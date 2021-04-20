import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Index from './page/index'
import About from './page/About'

const App = ()=> {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/react/index">index</Link>
            </li>
            <li>
              <Link to="/react/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/react">
            <Index />
          </Route>
          <Route path="/react/index">
            <Index />
          </Route>
          <Route path="/react/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount() {
  render(<App />, document.getElementById('micro_react'));
}

export async function unmount() {
  unmountComponentAtNode(document.getElementById('micro_react'));
}

if(!window.__POWERED_BY_SINGLE_SPA__){
  mount()
}