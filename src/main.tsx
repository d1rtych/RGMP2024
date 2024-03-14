import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MovieProvider } from './shared/contexts/MovieContext';
import Counter from './pages/Counter';
import App from './App'

import 'normalize.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router}/>
    </MovieProvider>
  </React.StrictMode>,
)
