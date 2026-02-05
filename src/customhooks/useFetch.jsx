import axios from "axios"
import { useEffect, useState } from "react"


function useFetch(url){
   const [products,setproducts]=useState("")

   async function fetchproducts(){
    let response =await axios.get(url)
    setproducts(response.data) 
   }
   useEffect(()=>{
    fetchproducts()
   },[]) 

   return{products}
}
export default useFetch