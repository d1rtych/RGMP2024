import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import MovieDetails from './components/MovieDetails/MovieDetails';
import AddMovie from './components/AddMovie/AddMovie';
import EditMovie from './components/EditMovie/EditMovie';
import LayoutWithBanner from './components/Layouts/LayoutWithBanner';
import Counter from './pages/Counter';
import { queryClient } from './services/queryClient';

import 'normalize.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LayoutWithBanner />,
      },
      {
        path: 'new',
        element: <LayoutWithBanner childComponent={<AddMovie />} />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetails />,
        children: [
          {
            path: 'edit',
            element: <EditMovie />,
          },
        ]
      },
    ],
  },
  {
    path: '/counter',
    element: <Counter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
