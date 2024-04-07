import React from 'react'
import Caro from '../Caurosal/Caro'
import Product from '../Product/Products'
import Product1 from '../Product1/Product1'
import tarai from '../Product1/tarai.jpg'
import ghee from '../Product/ghee.jpg'
import ProductGrid from '../prod/ProductGrid'
import Arhal from '../prod/Arhal.jpg'
import cold from'../prod/cold.jpg'
import free from '../prod/free.jpg'
import Tarai from '../Abouttarai/Tarai'
import NutritionRichFood from '../Nutrition/NutritionRichFood'
import Nut from '../Nutrition/Nut'

export default function Home() {
  return (
    <div>
      
      <Caro/>
      
      <ProductGrid text="Our Curated Selections" />
     
      <Product src={ghee}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Product1/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Product src={tarai}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Tarai/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <NutritionRichFood h2='nutration rich food'  h1='traditionally processed' para=' Traditional Indian agriculture embodies  
      
            health, fostering crop diversity,
             and optimizing  
            water resources.
             It fosters community bonds through 
            collaborative practices while maintaining a lower 
            environmental footprint. These time-tested methods 
            harmonize farming with nature, offering a promising
            path to a greener future.'/>
      <br/>
      <br/>
      <br/>
      <Nut/>
      <br/>
      <br/>
      <br/>

      <NutritionRichFood  h2='Looking to the future' h1=' our vision ' para= ' Our mission is to cultivate chemical-free,
      sustainable produce preserving traditional farming methods, and promoting eco-friendly practices. Were dedicated to enhancing soil health, empowering local communities, and contributing to a healthier India by offering a diverse range of high-quality products that encourage a nutritious and sustainable lifestyle'/>
    </div>
  )
}
