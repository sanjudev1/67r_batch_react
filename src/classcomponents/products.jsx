import React from "react"
import CustomSpinner from "./customSpinner"


class Fetchproducts extends React.Component{
   static getDerivedStateFromProps(){
    console.log("get derived state from props")
   }
    componentDidMount(){
        console.log("component didmount...")
        this.fetchdata()
    }
    shouldComponentUpdate(){
        return true
        console.log("update method")
    }
    getSnapshotBeforeUpdate(a,b,c){
   console.log(a,b,c)
    }
    componentDidUpdate(){
       console.log("update component")
    }
constructor(){
    super()
    console.log("constructor...")
     this.state={
    count:0,
    products:[]
  } 
}
fetchdata=()=>{
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((response)=>{
    console.log(response.products)
    this.setState({products:response.products})
});
}
    
increment=()=>{
 this.count=this.state.count+1
 console.log(this.count)
 this.setState({count:this.state.count+1})
}

 render(){
    console.log("render....")
    return(<>
   {/* <h1>{this.state.count}</h1>
   <button onClick={this.increment}>increment</button> */}
 {this.state.products.length>0?<>
  {this.state.products.map(e=><img src={e.images[0]} style={{width:"200px"}}/>)}
 </>:<CustomSpinner/>}
    </>)
 }
}
export default Fetchproducts