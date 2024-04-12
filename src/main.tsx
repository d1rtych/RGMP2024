import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MovieProvider } from './shared/contexts/MovieContext';
import Counter from './pages/Counter';
import App from './App'

import 'normalize.css'
import './index.css'

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <RouterProvider router={router}/>
      </MovieProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
