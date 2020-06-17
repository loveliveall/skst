import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Analytics from 'react-router-ga';

import App from '@/components/App';
import { store } from '@/store';

import '@/data/_validator'; // Validating data

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Analytics id="UA-142042916-2">
        <App />
      </Analytics>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
