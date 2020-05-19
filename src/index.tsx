import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { App } from './components/app/';
import { store } from './store/';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './ui/theme';
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
