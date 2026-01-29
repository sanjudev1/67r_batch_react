import { useEffect, useState } from "react"
import CustomSpinner from "../classcomponents/customSpinner"
import axios from "axios";

function DisplayProducts(){
    const [products,setproducts]=useState([])
  console.log("render")
   async function fetchproducts(){
    let response =await axios.get("https://dummyjson.com/recipes")
    setproducts(response.data.recipes)
    console.log(response.status)
   }

   useEffect(()=>{
    fetchproducts()
    console.log("use effect render")
   },[])
  return(<>

  {products.length>0?<>
   {products.map(e=><img src={e.image} style={{width:"250px"}}/>)}
  </>:<CustomSpinner/>}
  </>)
}
export default DisplayProducts