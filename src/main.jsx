import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/layout'
import OrderList from './components/fruits'
import { UnOrderList} from './components/fruits'
import CounterApp from './classcomponents/counterApp'
import {Marchipoyanu as Sample} from './components/marchipoyanu'
import Anr from './components/anr'
import Nagarjuna from './components/nagarjuna'

import CustomCarousel from './classcomponents/customCorosuels'
import CustomNavbar from './classcomponents/customheader';
import Fetchproducts from './classcomponents/products';
import TimeLine from './classcomponents/Timeline';
import Counter from './components/counter';
import DisplayProducts from './components/fakestoredata';
import UserForm from './components/userform';
let fruits=["grapes","bananas","mangos","oranges","apples"]
createRoot(document.getElementById('root')).render(
  <div>
   <CustomNavbar/>
   <CustomCarousel/>
   {/* <Fetchproducts/> */}
   <UserForm/>
   <CounterApp/>
   <DisplayProducts/>
   <TimeLine/>
    {/* <Layout/> */}
  </div>
  
)
