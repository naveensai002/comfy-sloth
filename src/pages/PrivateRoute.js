import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ childern, ...rest }) => {
  //getting the user from auth0 instead of getting it from useUserContext

  const { user } = useAuth0();

  //childern is checkout component
  return (
    <Route
      {...rest}
      render={() => {
        return user ? childern : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
