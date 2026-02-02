import { useEffect, useState } from "react"
import CustomSpinner from "../classcomponents/customSpinner"
import axios from "axios";
import { Link } from "react-router";

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
   {products.map(e=><Link to={`recipe/${e.id}`}><img src={e.image} style={{width:"250px"}}/></Link>)}
  </>:<CustomSpinner/>}
  </>)
}
export default DisplayProducts