import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Private,
  About,
  Cart,
  Products,
  Error,
  Checkout,
  AuthWrapper,
} from './pages';
import ProductsPage from './pages/ProductsPage';
import PrivateRoute from './pages/PrivateRoute';

// to prevent application from weird bugs we have wrapped the whole router in authWrapper so that we can loading or error

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

          <Route exact path='/product'>
            <Products />
          </Route>

          <Route exact path='/product/:id' children={<SingleProduct />} />

          <Route exact path='/checkout'>
            <Checkout />
            <PrivateRoute />
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
