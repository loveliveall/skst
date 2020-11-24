import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';

import App from '@/components/App';

ReactDOM.render(
  <BrowserRouter>
    <Analytics id="UA-142042916-2">
      <App />
    </Analytics>
  </BrowserRouter>,
  document.getElementById('app'),
);
