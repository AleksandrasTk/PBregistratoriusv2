import React, { useReducer } from 'react';

import playerContext from './playerContext';
import playerReducer from './playerReducer';
import axios from 'axios';
import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PLAYER,
  FILTER_PLAYERS,
  CLEAR_FILTER,
  // GET_PLAYERS,
  PLAYER_ERROR,
  // CLEAR_PLAYERS,
} from '../types';
// import { json } from 'express';
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
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Add Player
  const addPlayer = async (data) => {
    try {
      dispatch({
        type: ADD_PLAYER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PLAYER_ERROR,
        payload: error.response.msg,
      });
    }
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
  // Update Player
  const updatePlayer = (player) => {
    dispatch({
      type: UPDATE_PLAYER,
      payload: player,
    });
  };
  // Filter Player
  const filterPlayer = (text) => {
    dispatch({
      type: FILTER_PLAYERS,
      payload: text,
    });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
  return (
    <playerContext.Provider
      value={{
        players: state.players,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPlayer,
        deletePlayer,
        setCurrent,
        clearCurrent,
        updatePlayer,
        filterPlayer,
        clearFilter,
      }}>
      {props.children}
    </playerContext.Provider>
  );
};
export default PlayerState;

// axios
//   .post('/api/players', data , { headers: headers })
//   .then((res) => {
//     dispatch({
//             type: ADD_PLAYER,
//             payload: response.data,
//           });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(data);
// console.log(headers);
// fetch('/api/players', {
//   method: 'post',
//   headers: headers,
//   body: data,
// })
//   .then((response) => {
//     console.log(response);
//     console.log(response.data);
//     dispatch({
//       type: ADD_PLAYER,
//       payload: response.data,
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//     dispatch({
//       type: PLAYER_ERROR,
//       payload: err.response.msg,
//     });
//   });
