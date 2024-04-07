import React from 'react'
import './Nut.css'
import NutProd from './NutProd.jpg'

export default function NutritionRichFood(prop) {
  return (
    <>
      <div className="containerNut">
        <div className="box-1">
          <img className='Nut5' src={NutProd} alt="" />
        </div>
        <div className="box-2">
          <h2 className='text-center  west '>{prop.h2} </h2>
          <h1 className='text-center pt-2 top' > {prop.h1} </h1>
          <p className='text-center pt-2 indian '>{prop.para}</p>
        </div>
       
      </div>
    </>
  )
}
