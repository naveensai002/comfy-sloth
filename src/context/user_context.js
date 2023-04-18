import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  //render every time user changes
  useEffect(() => {
    // console.log(`user':${user}`);
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
