import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Portfolio(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 

  return(
    <div className='container mb-5' id='portfolio'>
    <Carousel responsive={responsive} showDots={true} autoPlay={true}  autoPlaySpeed={2000}>
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div> 
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>  
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>   
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>
       <div className='card'>
           <div>
               <img className='product--image' src='./image/me.JPG' alt='enjf'/>
               <h2>kefji</h2>
               <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p>
               <p>kwejir werjwie wkrji</p>
               <p>
                  <button>Add to cart</button>
               </p>
           </div>
       </div>       
    </Carousel>
  </div>  
  )
}

export default Portfolio;