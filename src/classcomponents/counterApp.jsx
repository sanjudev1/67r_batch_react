import React from "react"


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
    return(<div style={{display:"flex"}} >
      <button onClick={this.decrement}>decrement</button>
      <h1>count :{this.state.count}</h1>
      <button onClick={this.increment}>increment</button>
    </div>)
 }
}
export default CounterApp