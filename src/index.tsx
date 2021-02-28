import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';

import App from '@/App';
import store from '@/store';
import theme from '@/theme';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <Analytics id="UA-142042916-2">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Analytics>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('app'),
);
