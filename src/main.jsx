import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import App from './App';
import About from './components/about';
import NotFound from './components/NotFound';
import Recipe from './components/recipe';
import Cart from "./components/home"
import { banjarhillsstore } from './banjarahillsstore/MahismathiMandi';
import { Provider } from 'react-redux';


export const Waiter = createContext()

let fruits=["grapes","bananas","mangos","oranges","apples"]
createRoot(document.getElementById('root')).render(
 
  <Provider store={banjarhillsstore}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  </Provider>
 

 
 
)
