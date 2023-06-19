import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { HttpLink } from 'apollo-link-http';
import { Box } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import App from './App';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { ErrorPage } from './pages/ErrorPage';
import { PoolDetailsPage } from './pages/PoolDetailsPage';
import { PoolsPage } from './pages/PoolsPage';
import { TokenDetailsPage } from './pages/TokenDetailsPage';
import { TokensPage } from './pages/TokensPage';

const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <Navigation />
    <Box pad={{ vertical: 'small' }}>
      <Outlet />
    </Box>
  </ErrorBoundary>
);

const link = new HttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
});

export const client = new ApolloClient({
  link: link as any,
  cache: new InMemoryCache(),
});

export const routesConfig = [
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/tokens',
        element: <TokensPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/tokens/:id',
        element: <TokenDetailsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pools',
        element: <PoolsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pools/:id',
        element: <PoolDetailsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ApolloProvider>
  </React.StrictMode>
);
