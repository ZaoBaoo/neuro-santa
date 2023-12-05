import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import { App } from './components/App/App.jsx';

// Store
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
