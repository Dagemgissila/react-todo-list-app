
import './App.css';


function Body({Lists,handleCheck ,handleDelete}) {
  


        
  return (
    <>
    <div className='body container mt-1'>
         <ul className='list-group'>
            { 

            Lists.length > 0 ? (
            Lists.map((list)=>
           
        <li key={list.id} className='list-group-item p-1 m-2 d-flex justify-content-between align-items-center'>
             <input 
              type='checkbox'
              className='check'
              onChange={()=>handleCheck(list.id)}
              checked={list.checked}
             
            />
             <h4>{list.newList}</h4>
        
            <button  className='btn btn-danger' onClick={()=>handleDelete(list.id)}>Delete</button>
        </li>)
    ):(<p>no list found</p>)
            
            }


         </ul>
    </div>
    </>
  )
}

export default Body