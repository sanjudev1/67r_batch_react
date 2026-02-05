import CustomCarousel from "../classcomponents/customCorosuels"
import CustomNavbar from "../classcomponents/customheader"
import { Customers } from "./Mandiusers"


function Cart(){
    return(<>
    <CustomNavbar/>
    <CustomCarousel/>
    This is home page
    <Customers/>
    </>)
}
export default Cart
