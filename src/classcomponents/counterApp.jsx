import React from "react"
import Child from "./child"


class CounterApp extends React.Component{
  state={
     count:0
    }
    increment=()=>{
        console.log("increment is triggerd",this.state.count)
        this.setState({count:this.state.count+1})
         console.log("increment is triggerd",this.state.count)

    }

    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
 render(){
   console.log("counter app (parent) render")
    return(<div style={{display:"flex"}} >
      <Child/>
      <button onClick={this.decrement}>decrement</button>
      <h1 >count :<span style={{color: this.state.count>=0?this.state.count>0?"green":"black":"red"}}>{this.state.count}</span></h1>
      <button onClick={this.increment}>increment</button>
    </div>)
 }
}
export default CounterApp