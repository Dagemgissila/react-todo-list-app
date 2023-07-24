import React from 'react'

function AddList({handleSubmit,setNewList,newList}) {
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group my-2'>
          <label htmlFor='addList' className='form-label'>Add List</label>
             <input
             autoFocus
               type='text'
               required
               id="addList"
               placeholder='add List'
               className='form-control my-3'
               value={newList}
               onChange={(e)=>setNewList(e.target.value)}

             />
          </div>
             <button className='btn btn-primary n'
             type='submit'

             >Add</button>
          </form>
    </div>
  )
}

export default AddList