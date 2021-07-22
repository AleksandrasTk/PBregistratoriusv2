import React, { useContext, useEffect, useRef } from 'react';
import Playercard from './Playercard';
import PlayerContext from '../../Context/Players/playerContext';

const Playeritems = () => {
  const playerContext = useContext(PlayerContext);
  const text = useRef('');

  const { players, filtered, filterPlayer, clearFilter } = playerContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value != null) {
      filterPlayer(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <section className='players container'>
      <div className='greet-content'>
        <h1>Hey Coach here is your squad</h1>
        <form>
          <input
            className='search-bar'
            ref={text}
            type='text'
            placeholder='Search For Players...'
            onChange={onChange}
          />
        </form>
      </div>
      <section className='container playergrid'>
        {/* {players.map((p) => console.log(p))} */}
      </section>
    </section>
  );
};

export default Playeritems;
