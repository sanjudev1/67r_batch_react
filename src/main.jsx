import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout'
import OrderList from './components/fruits'
import { UnOrderList} from './components/fruits'
import CounterApp from './classcomponents/counterApp'
import {Marchipoyanu as Sample} from './components/marchipoyanu'
import Anr from './components/anr'
import Nagarjuna from './components/nagarjuna'
let fruits=["grapes","bananas","mangos","oranges","apples"]
createRoot(document.getElementById('root')).render(
  <>
 
    <OrderList>{{bowl:fruits}}</OrderList>  
    <UnOrderList bowl={fruits}/>
    <CounterApp/>
    <Layout/>
   <Sample/>
   <Nagarjuna>big boss lo naku chance ivvandi niraja</Nagarjuna>
   <Layout/>
  </>
  
)
