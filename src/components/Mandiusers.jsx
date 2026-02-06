import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../products/recipes'

export function Customers() {

  const menulist = useSelector((state) => state.pullama_recipes.menu_items)
  
  const dispatch = useDispatch()

  return (
    <div style={{}}>
     
       {menulist.map(e=><div style={{display:"flex",justifyContent:"center", padding:"5px"}}>
       <button className='btn btn-danger' onClick={()=>dispatch(decrement(e))}>-</button>
       <img src={e.image} style={{width:"100px",padding:"10px"}}/>
       <h2>{e.count}</h2>
       <button className='btn btn-success' onClick={()=>dispatch(increment(e))}>+</button>
       </div>)} 
    </div>
  )
}