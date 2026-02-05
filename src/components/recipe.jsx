import { useParams } from "react-router"
import CustomNavbar from "../classcomponents/customheader"
import { useEffect, useState } from "react"
import CustomSpinner from "../classcomponents/customSpinner"
import useFetch from "../customhooks/useFetch"


function Recipe(){

   const {id}=useParams()
   const {products}=useFetch(`https://dummyjson.com/recipes/${id}`)
  console.log(products,"response recipe")

    return(<>
    <CustomNavbar/>
    {products?<><img src={products.image} style={{width:"350px"}}/></>:<CustomSpinner/>}
    </>)
}
export default Recipe