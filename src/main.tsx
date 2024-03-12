import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// COUNTER with an old and disgusting approach
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import CounterApp from './components/Counter.tsx'; // Import the App component
//
// const rootElement = document.getElementById('root');
// // @ts-ignore
// const root = ReactDOM.createRoot(rootElement);
//
// root.render(
//   React.createElement(CounterApp, null, null)
// );
