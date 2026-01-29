import React from "react"
import SubChild from "./subchild"


class Child extends React.PureComponent{
 render(){
    console.log("child component")
    return(<>
    <SubChild/>
    </>)
 }
}
export default Child