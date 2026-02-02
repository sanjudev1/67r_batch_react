import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import App from './App';
import About from './components/about';
import Home from './components/home';
import NotFound from './components/NotFound';
import Recipe from './components/recipe';

export const Waiter = createContext()

let fruits=["grapes","bananas","mangos","oranges","apples"]
createRoot(document.getElementById('root')).render(
 <Waiter value={{breakfast:"masadosa with kobbari chutney"}}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/service" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
 </Waiter>
)
