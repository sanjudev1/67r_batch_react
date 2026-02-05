import { useCallback, useMemo, useState } from "react"
import UserForm from "./userform"


// component
function Counter(){
   console.log("counter com is render (shake)")
   let total_sum=useMemo(()=>{
      console.log("re-calculating...")
      return [1,2,3,4,5].reduce((prev,present)=>{
         return prev+present
      })
   },[])
let [count,setcount]=useState(0)
 function increment(){
    setcount((prev)=>prev+1)
    
    
//   console.log(count)
 }
 
 const greet=()=>{
   
 }
 function decrement(){
    setcount(count-1)
 }
 return(
 <div style={{justifyContent:"center",display:"flex"}}>
 <button className="btn btn-primary" onClick={decrement}>decrement</button>
 <h1>Count : {count}</h1>
 <h1>sum : {total_sum}</h1>
 <button className="btn btn-warning" onClick={increment}>increment</button>
 <UserForm text={greet}/>
 </div>)
}
export default Counter