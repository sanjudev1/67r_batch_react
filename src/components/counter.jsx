import { useState } from "react"


// component
function Counter(){
let [count,setcount]=useState(0)
 function increment(){
    setcount((prev)=>prev+1)
    
    
//   console.log(count)
 }
 function decrement(){
    setcount(count-1)
 }
 return(
 <div style={{justifyContent:"center",display:"flex"}}>
 <button className="btn btn-primary" onClick={decrement}>decrement</button>
 <h1>Count : {count}</h1>
 <button className="btn btn-warning" onClick={increment}>increment</button>
 </div>)
}
export default Counter