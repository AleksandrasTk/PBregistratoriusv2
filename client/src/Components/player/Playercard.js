import React, { useContext } from 'react';
import PlayerContext from '../../Context/Players/playerContext';

const Playercard = ({ player }) => {
  const playerContext = useContext(PlayerContext);

  const { deletePlayer, setCurrent, clearCurrent } = playerContext;

  const onClick = () => {
    deletePlayer(id);
    clearCurrent();
  };

  const { id, name, playerNumber, role, status } = player;
  return (
    <div>
      <div className='card'>
        <div className='player-info'>
          <div className='info'>
            <div>
              <h1>{name}</h1>
              <h1>{role}</h1>
            </div>
            <div
              className={
                'status ' +
                (status === 'rest'
                  ? 'rest'
                  : status === 'substitute'
                  ? 'sub'
                  : 'success')
              }>
              <p>{status}</p>
            </div>
          </div>
          <button
            className='card-edit'
            onClick={() => {
              setCurrent(player);
            }}>
            <h1>Edit</h1>
          </button>
          <button className='card-delete' onClick={onClick}>
            {' '}
            X{' '}
          </button>
        </div>
        <div className='player-number'>
          <p className='player-n'>{playerNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Playercard;
