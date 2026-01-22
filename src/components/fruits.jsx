import React from "react"

function Items(hand){
   
    return(
        <>
           {hand.plate.map((val,index,arr)=><li key={index}>{val}</li>)}  
        </>
    )
}


function OrderList(hand){
   console.log(hand.children)
    return(<ol>
       <Items plate={hand.children.bowl}/>
    </ol>)
}
export default OrderList // default export

export function UnOrderList(hand){ // named export 
   
   return(<ul>
       <Items plate={hand.bowl} />
    </ul>)
}
 

