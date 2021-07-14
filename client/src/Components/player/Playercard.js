import React from "react";

const Playercard = ({ player }) => {
  const { name, playerNumber, role, status } = player;
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
                "status " +
                (status === "Rest"
                  ? "rest"
                  : status === "Substitute"
                  ? "sub"
                  : "success")
              }
            >
              <p>{status}</p>
            </div>
          </div>
          <button className='card-edit'>
            <h1>Edit</h1>
          </button>
          <button className='card-delete'> X </button>
        </div>
        <div className='player-number'>
          <p className='player-n'>{playerNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Playercard;
