import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from '@/routes/root';
import Index from '@/routes/index';
import ErrorPage from '@/error-page';
import Contact, { loader as contactLoader } from '@/routes/contact';
import EditContact, { action as editAction } from '@/routes/edit';
import { action as destroyAction } from '@/routes/destroy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        loader: contactLoader,
        element: <Contact />,
      },
      {
        path: 'contacts/:contactId/edit',
        loader: contactLoader,
        action: editAction,
        element: <EditContact />,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
