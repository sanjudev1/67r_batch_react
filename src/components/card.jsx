

function Card(a){
   
    return(
     <div style={{backgroundColor:a.asserts.color,padding:"20px",margin:"5px",borderRadius:"20px"}}>
       
        <img src={a.asserts.img} style={{width:'300px',borderRadius:"10px"}}/>
     <h1>{a.asserts.name}</h1>
     <p>get the app now to ordering your fav dishes</p>
     <button>get it now!</button>
     </div>
    )
}
export default Card