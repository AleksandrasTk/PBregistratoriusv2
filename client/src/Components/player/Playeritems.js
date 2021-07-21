import React, { useContext } from "react";
import Playercard from "./Playercard";
import PlayerContext from "../../Context/Players/playerContext";

const Playeritems = () => {
  const playerContext = useContext(PlayerContext);
  const { players } = playerContext;
  return (
    <section className='players container'>
      <div className='greet-content'>
        <h1>Hey Coach here is your squad</h1>
      </div>
      <section className='container playergrid'>
        {players.map((p) => {
          return <Playercard player={p} key={p.id} />;
        })}
      </section>
    </section>
  );
};

export default Playeritems;
