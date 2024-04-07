import React from 'react'
import './produ.css'
import Arhal from './Arhal.jpg'
import cold from './cold.jpg'
import free from './free.jpg'
import natural from './natural.jpg'
import low from './low.jpg'
import sk from './sk.jpg'



export default function ProductGrid(prop) {
  return (
    <>
     <h1 className='our'>{prop.text}</h1>
    <div className='flex-container'>
        <div className="flex-box">
            <img className='dd1' src={Arhal} alt="" />
            <h4 > <a className='kit' href="/Product"> kitechen essential</a>  →</h4>
        </div>
        <div className="flex-box">
             <img className='dd1' src={free} alt="" />
             <h4 > <a className='kit' href="/Product">

Low GI Rice →</a>  </h4>
        </div>
        <div className="flex-box">
        <img className='dd1' src={cold} alt="" />
        <h4 > <a className='kit' href="/Product"> Natural Sweeteners</a>  →</h4>
        </div>
        
       
      
    </div>
    <div className='flex-container dd2 py-5'>
    <div className="flex-box">
        <img className='dd1' src={natural} alt="" />
        <h4 > <a className='kit' href=""> Superfoods</a>  →</h4>
    </div>
    <div className="flex-box">
         <img className='dd1' src={low} alt="" />
         <h4 > <a className='kit' href="/Product"> 

Gluten Free Flour</a>  →</h4>
    </div>
    <div className="flex-box">
    <img className='dd1' src={sk} alt="" />
   
    
    <h4> <a className='kit' href="/Product">Cold Pressed Oils</a>  →</h4>
    </div>
    
   
  
</div>
</>
  )
}


