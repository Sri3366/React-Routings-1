import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPageFound from "./components/NoPageFound";
import Navbar from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";




function App(){
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NoPageFound/>}/>
      </Routes>
    </>
  )
}

export default App;


//Routing:Navigating from one page to another page
//Navbar top lo pedatham valla anni page lo Home About Contact kanipisthay
// Routes:idhi path match ayinappudu element shift ayyela chesthadhi