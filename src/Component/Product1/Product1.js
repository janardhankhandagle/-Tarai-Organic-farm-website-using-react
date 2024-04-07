import React from 'react';
import New from './New.jpg'
import './Product1.css';
import Button from 'react-bootstrap/Button';

function Product1() {
  return (
  
    <div className="product-container col-4 ">
      
      <div className="product-info padd ">
        <div className="product-title ">
          <h1 className='tit'>Farm Made Cultured
           Ghee</h1>
        </div>
        
        <div className="product-price">
          <h2>Rs. 1,850.00</h2>
        </div>
        <div className="product-description">
          <h3>
          Tax included. Shipping calculated at checkout.
          </h3>
        </div>
        <br/>
        <div >
          <h3>Size</h3>
          <br/>
          <Button className="product-size" as="input" type="button" value="100ml" /> {'  '}
      <Button className="product-size" as="input" type="submit" value="250ml" />{'     '}
      <Button className="product-size" as="input" type="reset" value="500ml" />
         
        </div>
       <br/>
        <div className="product-buttons">
          <a href="/Add">
          <button className="product-button">Add to cart</button></a>
          <br/>
          <br/>
          <button className="product-button1">Buy Now</button>
        </div>
        <div>
          <br/>
          <pre> <h3>⬆️share          view all details </h3></pre>
          
        </div>
      </div>
      <div className="product-image imge">
        <img id='prod' src={New} alt="" />
      </div>
    </div>
   
  
  );
}

export default Product1;