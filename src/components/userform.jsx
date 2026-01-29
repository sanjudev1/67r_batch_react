import { useRef, useState } from "react"


function UserForm(){
    // const[name,setname]=useState("hello ")
    const {name}=useRef("")
  
    console.log("user form re-render")
   
    function handleSubmit(e){
        console.log("form is submitted")
      console.log(name.current.value)
        e.preventDefault()
    }
    return(<>
    <form onSubmit={handleSubmit}>
    <input  placeholder="Name" ref={name} />
    <button type="submit">submit</button>
    </form>
    </>)
}
export default UserForm