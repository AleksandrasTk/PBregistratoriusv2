import {
  ADD_PLAYER,
  PLAYER_ERROR,
  DELETE_PLAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PLAYER,
  FILTER_PLAYERS,
  CLEAR_FILTER,
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
    case UPDATE_PLAYER:
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.id ? action.payload : player
        ),
      };
    case FILTER_PLAYERS:
      return {
        ...state,
        filtered: state.players.filter((player) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return player.name.match(regex) || player.playerNumber.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
export default switchCases;
