import { useRef, useState } from "react"


function UserForm(prop){
    // const[name,setname]=useState("hello ")
    console.log("user form re-render")
    const name=useRef("")
    let a="" 
    
    console.log("a value is",a)
    console.log("useref value ",name.current.value)
    function handleSubmit(event){
      event.preventDefault()
        console.log("form is submitted",event)
        console.log("a value is ",a)
      console.log(name.current.value)
    }
    function handleChange(e){
       a=e.target.value
       console.log(a)
    }
    return(<>
    <form onSubmit={handleSubmit}>
      <h1>{prop.a}</h1>
      <button onClick={()=>{prop.b(prop.a+1)}}>two way data flow</button>
    <input  placeholder="Name" ref={name} onChange={(event)=>handleChange(event)} />
    <button type="submit">submit</button>
    </form>
    </>)
}
export default UserForm