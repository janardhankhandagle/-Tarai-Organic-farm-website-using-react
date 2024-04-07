
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes ,Route} from "react-router-dom"
import Home from './Component/Navbar/Home'
import Logo from './Component/Navbar/Logo';
import Product from './Component/Navbar/Product'
import About from  './Component/Navbar/About'
import Contact from './Component/Navbar/Contact'
import Add from './Component/Navbar/Add'
import Search from './Component/Navbar/Search';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   < Route path='/' element={<Home />} />
   < Route path='/Product' element={<Product />} />
   < Route path='About' element={<About />} />
   < Route path='/Contact' element={<Contact />} />
   < Route path='/Search' element={<Search/>} />
   < Route path='/' element={<Logo />} /> 
   < Route path='/Add' element={<Add />} />
   </Routes>
   </>
  );
}

export default App;
