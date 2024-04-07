import React from 'react';
import ghee from './ghee.jpg';
import './Product.css';
import Button from 'react-bootstrap/Button';

function Products(prop) {
  return (
  
    <div className="product-container  pb-5   " id='pb1'>
      <div className="product-image">
        <img id='prod' src={prop.src} alt="" />
      </div>
      <div className="product-info">
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
          <pre> <h3>⬆️share                view all details </h3></pre>
          
        </div>

      </div>
      
    </div>
   
  
  );
}

export default Products;