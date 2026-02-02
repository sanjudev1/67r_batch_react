import CustomCarousel from "./classcomponents/customCorosuels"
import CustomNavbar from "./classcomponents/customheader"
import TimeLine from "./classcomponents/Timeline"
import Counter from "./components/counter"
import DisplayProducts from "./components/fakestoredata"


function App() {
  return (
    <>
     <CustomNavbar/>
   <CustomCarousel/>
   <Counter/>
   <DisplayProducts/>
   <TimeLine/>
    </>
  )
}

export default App
