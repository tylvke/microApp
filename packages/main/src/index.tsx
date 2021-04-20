import React, { createContext, useState } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './registerWindow';
import './single-spa-config';
import AsyncComponent from './asyncComponent';

const GlobalContext = createContext({});
window.GlobalContext=GlobalContext;


const App = () => {
  // 特定中心路由通信
  const [title, setTitle] = useState('微前端');
  // 通用事件通信
  window.singleEvent.on('setTitle',(title)=>{
    setTitle(title)
  })

  return(
    <GlobalContext.Provider value={{title, setTitle}}>
      <div>
        <h1>{title}</h1>
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
      </div>
    </GlobalContext.Provider>
  )
}
render(
  <App />,
  document.getElementById('app')
);
