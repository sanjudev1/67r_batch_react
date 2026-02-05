import React, { useRef, useState } from "react"


function UserForm(prop){
 console.log("user form (child comp) is rendered (shake)")
    const name=useRef("")
   
    

    function handleSubmit(event){
      event.preventDefault()
       
    }
    function handleChange(e){
     
    }
    return(<>
    <form onSubmit={handleSubmit}>
     
 <h1>{prop.text}</h1>
    <input  placeholder="Name" ref={name} onChange={(event)=>handleChange(event)} />
    <button type="submit">submit</button>
    </form>
    </>)
}
export default React.memo(UserForm)