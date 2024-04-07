import React from 'react'
import './Nut.css'
import women from './women.jpg'

export default function Nut() {
  return (
    <>
      <div className="containerNut">
      <div className="box-1">
          <h2 className='text-center  west '>Sustainable farming </h2>
          <h1 className='text-center pt-2 top' > our strength </h1>
          <p className='text-center pt-2 indian '>
          Tarai Organic Farms thrives on its <br />
           strengths, including a commitment to <br />
            regenerative natural farming, <br />
             preserving traditional methods, <br />
              and promoting eco-friendly practices. <br />
               With a diverse range of over 35 high-quality, <br />
                chemical-free products, it's a beacon of sustainable <br />
                 agriculture, benefiting soil health, <br /> 
                 community empowerment, and a healthier lifestyle.
           </p>
        </div>
        <div className="box-2">
          <img className='Nut5' src={women} alt="" />
        </div>
       
      </div>
    </>
  )
}
