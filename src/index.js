import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
=======
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store'; // Ensure correct path for store
>>>>>>> a0219063efbb94b00e1a99faff8aeaa1256ecc8c
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
<<<<<<< HEAD
  </Provider>,
=======
  </Provider>
>>>>>>> a0219063efbb94b00e1a99faff8aeaa1256ecc8c
);

