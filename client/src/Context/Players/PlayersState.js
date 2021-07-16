import React, { useReducer } from "react";
import playerContext from "./playerContext";
import playerReducer from "./playerReducer";

const PlayerState = (props) => {
  const initialState = {
    players: [
      {
        name: "Mason Greenwood",
        playerNumber: "11",
        role: "Striker",
        status: "Substitute",
      },
      {
        name: "Harry Kane",
        playerNumber: "9",
        role: "Striker",
        status: "Playing",
      },
      {
        name: "Heung Min Son",
        playerNumber: "7",
        role: "Left Mid",
        status: "Playing",
      },
      {
        name: "Lionel Messi",
        playerNumber: "10",
        role: "Midfielder",
        status: "Rest",
      },
      {
        name: "Christiano Ronaldo",
        playerNumber: "7",
        role: "Striker",
        status: "Playing",
      },
    ],
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <playerContext.Provider
      value={{
        players: state.players,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
