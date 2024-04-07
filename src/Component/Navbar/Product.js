import React from 'react'
import './Rat.css'
import './Product.css'
import Arhal from './Arhal.jpg'
import cold from './cold.jpg'
import free from './free.jpg'
import natural from './natural.jpg'
import low from './low.jpg'
import sk from './sk.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Product() {
  return (
    <>
    
    <h1 className='our ts'> products  </h1>
    <div className="flex-container ava ">
   <span  >filter :</span> 
    <NavDropdown title="Availibility" id="basic-nav-dropdown">    
    <NavDropdown.Item href="#action/3.3"> 0 selected    <a href="/Product "> Reset</a></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">In stock (46)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              out of stock(5)
              </NavDropdown.Item>
             
              
            </NavDropdown>
            <NavDropdown title="Price" id="basic-nav-dropdown" className='
            sep'>    
        
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
      <span className='filter'>filter :</span> 
    <NavDropdown title="Alphabatically ,A -Z" id="basic-nav-dropdown">    
        
              <NavDropdown.Item href="#action/3.1">Alphabatically ,A -Z</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Alphabatically ,Z-A
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"> Price: High to Low</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.3">Price: High to Low</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1"> Date: New to Old</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.3">Date:Old to new</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
           <span className='
            sep'> 46 products</span>
    </div>
    
   
    <div className='flex-container'>
    
        <div className="flex-box  reduce " >
            <img className='dd1 reduce1'  src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
             <img className='dd1 reduce1' src={free} alt="" />
             <h4 > <a className='kit' href="/Product1">

Low GI Rice →</a>  </h4>
        </div>
        <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
        <img className='dd1 reduce1' src={cold} alt="" />
        <h4 > <a className='kit' href="/Product"> Natural Sweeteners</a>  →</h4>
        </div>
        
       
      
    </div>
    <div className='flex-container dd2 py-5'>
    <div className="flex-box reduce">
        <img className='dd1 reduce1' src={natural} alt="" />
        <h4 > <a className='kit' href=""> Superfoods</a>  →</h4>
    </div>
    <div className="flex-box reduce">
         <img className='dd1 reduce1' src={low} alt="" />
         <h4 > <a className='kit' href="/Product"> 

Gluten Free Flour</a>  →</h4>
    </div>
    <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
    
    <div className="flex-box reduce">
    <img className='dd1 reduce1' src={sk} alt="" />
   
    
    <h4> <a className='kit' href="/Product">Cold Pressed Oils</a>  →</h4>
    </div>
    
    
   
  
</div>
<div className='flex-container'>
        <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
             <img className='dd1 reduce1' src={free} alt="" />
             <h4 > <a className='kit' href="/Product">

Low GI Rice →</a>  </h4>
        </div>
        <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
        <img className='dd1 reduce1' src={cold} alt="" />
        <h4 > <a className='kit' href="/Product"> Natural Sweeteners</a>  →</h4>
        </div>
        
       
      
    </div>
    <div className='flex-container dd2 py-5'>
    <div className="flex-box reduce">
        <img className='dd1 reduce1' src={natural} alt="" />
        <h4 > <a className='kit' href=""> Superfoods</a>  →</h4>
    </div>
    <div className="flex-box reduce">
         <img className='dd1 reduce1' src={low} alt="" />
         <h4 > <a className='kit' href="/Product"> 

Gluten Free Flour</a>  →</h4>
    </div>
    <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
    
    <div className="flex-box reduce">
    <img className='dd1 reduce1' src={sk} alt="" />
   
    
    <h4> <a className='kit' href="/Product">Cold Pressed Oils</a>  →</h4>
    </div>
    
    
   
  
</div>
<div className='flex-container'>
        <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
             <img className='dd1 reduce1' src={free} alt="" />
             <h4 > <a className='kit' href="/Product">

Low GI Rice →</a>  </h4>
        </div>
        <div className="flex-box reduce">
            <img className='dd1 reduce1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box reduce">
        <img className='dd1 reduce1' src={cold} alt="" />
        <h4 > <a className='kit' href="/Product"> Natural Sweeteners</a>  →</h4>
        </div>
        
      
       
    
       
  
</div>
<div   className='flex-container' > 
<div  className="flex-box reduce">
   
     <a className='anch' href="/One">1</a>
      <a className='anch1' href="/Two">2</a>
      <a className='anch2' href="/Three">3</a>
      </div>
  </div>

    </>
    
  )
}
