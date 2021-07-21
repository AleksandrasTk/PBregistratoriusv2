import React, { useReducer } from 'react';
import { v4 as id } from 'uuid';
import playerContext from './playerContext';
import playerReducer from './playerReducer';
import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  // GET_PLAYERS,
  // DELETE_PLAYER,
  // UPDATE_PLAYER,
  // FILTER_PLAYERS,
  // CLEAR_FILTER,
  // PLAYER_ERROR,
  // CLEAR_PLAYERS,
} from '../types';

const PlayerState = (props) => {
  const initialState = {
    players: [
      {
        id: '1',
        name: 'Mason Greenwood',
        playerNumber: '11',
        role: 'Striker',
        status: 'substitute',
      },
      {
        id: '2',
        name: 'Harry Kane',
        playerNumber: '9',
        role: 'Striker',
        status: 'playing',
      },
      {
        id: '3',
        name: 'Heung Min Son',
        playerNumber: '7',
        role: 'Left Mid',
        status: 'playing',
      },
      {
        id: '4',
        name: 'Lionel Messi',
        playerNumber: '10',
        role: 'Midfielder',
        status: 'rest',
      },
      {
        id: '5',
        name: 'Christiano Ronaldo',
        playerNumber: '7',
        role: 'Striker',
        status: 'playing',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Add Player

  const addPlayer = (player) => {
    player.id = id();

    dispatch({
      type: ADD_PLAYER,
      payload: player,
    });
  };

  // Delete Player

  const deletePlayer = (id) => {
    dispatch({
      type: DELETE_PLAYER,
      payload: id,
    });
  };

  // Set Current

  const setCurrent = (player) => {
    dispatch({
      type: SET_CURRENT,
      payload: player,
    });
  };

  // Clear Current

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  return (
    <playerContext.Provider
      value={{
        players: state.players,
        current: state.current,
        addPlayer,
        deletePlayer,
        setCurrent,
        clearCurrent,
      }}>
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
