import { useContext } from "react"
import { Waiter } from "../main"

function Comp_3(){
   const {breakfast}= useContext(Waiter)
    return(<>
    <h1>{breakfast}</h1>
    </>)
}
export default Comp_3