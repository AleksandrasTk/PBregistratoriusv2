import React, { useContext } from 'react';
import Playercard from './Playercard';
import PlayerContext from '../../Context/Players/playerContext';

const Playeritems = () => {
  const playerContext = useContext(PlayerContext);
  const { players } = playerContext;
  return (
    <>
      <section className='container playergrid'>
        {players.map((p) => {
          return <Playercard player={p} />;
        })}
      </section>
    </>
  );
};

export default Playeritems;
