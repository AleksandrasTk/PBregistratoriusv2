import React from 'react';

const Playerform = () => {
  const onSubmit = (e) => {
    console.log('hello');
    e.preventDefault();
  };
  return (
    <div className='container player-form'>
      <form className='add-form' onSubmit={onSubmit}>
        <h1 style={{ textAlign: 'center', color: 'black' }}>
          Add a player to your sqaud
        </h1>
        <div className='form-control'>
          <label>NAME</label>
          <input type='text' placeholder='Player Name' />
        </div>
        <div className='form-control'>
          <label>PLAYER NUMBER</label>
          <input type='number' placeholder='Player Number' />
        </div>
        <div className='form-control'>
          <label>ROLE/POSITION</label>
          <input type='text' placeholder='Player Position' />
        </div>

        <div className='form-control form-control-check'>
          <label>STATUS:</label>
          <div className='status-radio'>
            <input
              type='radio'
              name='type'
              value='personal'
              // checked={type === 'personal'}
            />
            <label htmlFor='Playing'>PLaying</label>
          </div>
          <div className='status-radio'>
            <input
              type='radio'
              name='type'
              value='personal'
              // checked={type === 'personal'}
            />
            <label htmlFor='Playing'>Substitue</label>
          </div>
          <div className='status-radio'>
            <input
              type='radio'
              name='type'
              value='personal'
              // checked={type === 'personal'}
            />
            <label htmlFor='Playing'>Rest</label>
          </div>
        </div>
        <button className='btn btn-block'>Add Player</button>
      </form>
    </div>
  );
};

export default Playerform;
