import { useEffect, useState } from "react"
import CustomSpinner from "../classcomponents/customSpinner"
import axios from "axios";
import { Link } from "react-router";
import useFetch from "../customhooks/useFetch";
import { useDispatch } from "react-redux";
import { increment } from "../products/recipes";

function DisplayProducts(){
   const {products}= useFetch("https://dummyjson.com/recipes")
   console.log(products) // ""
   const dispatch=useDispatch()

  return(<>

  {products?<div style={{display:"flex",flexWrap:"wrap"}}>
   {products.recipes.map(e=><div style={{display:"flex",flexDirection:"column",width:"250px"}}>

    <Link to={`recipe/${e.id}`}><img src={e.image} style={{width:"250px"}}/></Link>
    <button onClick={()=>dispatch(increment(e))}>addtocart</button>
   </div>)}
  </div>:<CustomSpinner/>}
  </>)
}
export default DisplayProducts