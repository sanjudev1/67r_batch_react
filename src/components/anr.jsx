import Nagarjuna from "./nagarjuna"


function Anr(prop){
    console.log(prop.children,"children props")
    return(<>
    <Nagarjuna money={prop.money}/>
    </>)
}
export default Anr 