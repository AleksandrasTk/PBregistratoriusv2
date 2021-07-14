
import React from 'react'

const playerform = () => {
    const onSubmit =(e) =>
    {
        console.log("hello");
        e.preventDefault();
    }
    return (
        <div className="container player-form">
            <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>NAME</label>
        <input
          type='text'
          placeholder='Add Task'
       />
      </div>
      <div className='form-control'>
        <label>PLAYER NUMBER</label>
        <input
          type='Date'
          placeholder='Add Day'
       />
      </div>
      <div className='form-control'>
        <label>ROLE/POSITION</label>
        <input
          type='text'
          placeholder='Add Time'
       />
      </div>
      
      <div className='form-control form-control-check'>
        <label>STATUS</label>
        <input
          type='radio'
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
        </div>
    )
}

export default playerform
