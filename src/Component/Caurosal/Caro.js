import Carousel from 'react-bootstrap/Carousel';
import CRED from './CRED.jpg'
import Khapli from './Khapli.jpg'
import White from './White.jpg'
import web from './web.jpg'
import './Caur.css'



  export default function Caro() {
  return (
    <Carousel  data-bs-theme="dark" >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-130"
          src={CRED}
          alt="First slide"
        /> <Carousel.Caption>
        <button className='now'> shop </button>
      </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-130"
          src={Khapli}
          alt="Second slide"
        />
         <Carousel.Caption>
          <button className='now'> shop </button>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-130"
          src={web}
          alt="Third slide"
        />
         <Carousel.Caption>
            <a href="/Product">
          <button className='now'> shop </button></a>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-130"
          src={White}
          alt="Third slide"
        />
           <Carousel.Caption>
            <a href="/Product">
          <button className='now'> shop </button></a>
        </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
  );
}

