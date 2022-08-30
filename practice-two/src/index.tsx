import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Provider from './store/Provider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
