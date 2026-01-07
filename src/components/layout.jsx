import Card from "./card"

let arr=[{color:"#d4535b",name:"zomato",img:"https://b.zmtcdn.com/data/o2_assets/d1eee2be61cf47e2332cb7c49475c0981739777714.png",},
   {color:"#d1d197",name:"Blinkit",img:"https://b.zmtcdn.com/data/o2_assets/071cb96db84f20eea3a39804e113bdee1739777655.png",},
  {color:"#5d5094",name:"District",img:"https://b.zmtcdn.com/data/o2_assets/38bf2d77d9391b8b1866e3ae2b5fe19a1739777683.png",},
  {color:"#b05a82",name:"hyperpure",img:"https://b.zmtcdn.com/data/o2_assets/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.png",}
]

function Layout(){
    return(
    <div>
        <h1>POWERING INDIA’S CHANGING LIFESTYLES</h1>
        <div style={{display:"flex"}}>
        {arr.map((item,index)=><Card asserts={item} key={index}/>)}
        </div>
    </div>)
}
export default Layout