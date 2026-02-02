import { useParams } from "react-router"
import CustomNavbar from "../classcomponents/customheader"
import { useEffect, useState } from "react"
import CustomSpinner from "../classcomponents/customSpinner"


function Recipe(){
   const [dosa,setdosa]=useState("")
   const {id}=useParams()

   useEffect(()=>{

    fetch(`https://dummyjson.com/recipes/${id}`)
.then(res => res.json())
.then((response)=>{
    setdosa(response)
});
   },[])

    return(<>
    <CustomNavbar/>
    {dosa?<><img src={dosa.image} style={{width:"350px"}}/></>:<CustomSpinner/>}
    </>)
}
export default Recipe