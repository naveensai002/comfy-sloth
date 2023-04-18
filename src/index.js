import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev - uizqqm6mbxlesfce.us.auth0.com; domain
//vLvP52fih19CdtVuOffPGrd1vNuI22Rl client

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-uizqqm6mbxlesfce.us.auth0.com'
      clientId='STc6pPsevzz6ast6eFC2DKS1g8DfY4Ig'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
