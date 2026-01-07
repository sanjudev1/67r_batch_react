import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout'
import OrderList from './components/fruits'
import { UnOrderList} from './components/fruits'
import CounterApp from './classcomponents/counterApp'
let fruits=["grapes","bananas","mangos","oranges","apples"]
createRoot(document.getElementById('root')).render(
  <>
 
    <OrderList bowl={fruits} />
    <UnOrderList bowl={fruits}/>
    <CounterApp/>
   <Layout/>
  </>
  
)
