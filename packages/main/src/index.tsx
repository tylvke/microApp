import React from 'react';
import { render } from 'react-dom';
import './single-spa-config';

render(
  <div>
    <h1>微前端</h1>
    <h2>
      <a href="/#/react">react</a>
    </h2>
    <h2>
      <a href="/#/vue">vue</a>
    </h2>
  </div>,
  document.getElementById('app')
);
