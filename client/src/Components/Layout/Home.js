import React, { useEffect, useContext } from 'react';
import Playerform from '../player/Playerform';
import Playeritems from '../player/Playeritems';
import AuthContext from '../../Context/Auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Playerform />
      <Playeritems />
    </div>
  );
};

export default Home;
