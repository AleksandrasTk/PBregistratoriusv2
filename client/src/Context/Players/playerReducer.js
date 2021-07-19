import {
  ADD_PLAYER,
  PLAYER_ERROR,
  DELETE_PLAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  //   GET_PLAYERS,
  //   UPDATE_PLAYER,
  //   FILTER_PLAYERS,
  //   CLEAR_FILTER,
  //   CLEAR_PLAYERS,
} from "../types";

var switchCases = (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    case PLAYER_ERROR:
      return {
        error: alert(action.payload),
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
export default switchCases;
