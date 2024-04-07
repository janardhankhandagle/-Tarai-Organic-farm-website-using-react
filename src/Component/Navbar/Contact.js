import React from 'react'
import './Contact.css'
import welcome from './welcome.jpg'

export default function Contact() {
  return (
    <>
    <div className="container4 text-center">
        <h1 className=' er'>Contact Us </h1>
        <div className='far'>
          <div className=' parag'>

            <p>We're here to connect! Whether you have inquiries   about our  organic products, want to<br/>
               explore collaborations, or simply wish  to share your thoughts,we welcome your messages.<br/>
                Reach out to us, and let's grow,learn, and create a sustainable, </p>
          </div>
        <img className='farms  fab ' src={welcome}></img>
        </div>
        <div className='formm'>
        <div>
          <input type="text " placeholder='name ' id='name' />
          <input type="email" placeholder='email' id='email' />
        </div>
        <div>
          <input type="phone "  placeholder='phone number' id='phone'/>
        </div>
        <div> 
          <textarea name="" id="area" cols="85" rows="3" placeholder='comments'></textarea>
        </div>
        <button className='send'> send </button>
      </div>
      </div>
    </>
  )
}
