import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Certificate(){
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
    <div className='container mb-5'>
               <div className="px-4 py-1 my-3 text-center">
                   <h5 className="display-5 fw-bold text-body-emphasis">Certificate</h5>
                   <p className="lead mb-4">Quickly design and customize responsive moopen source toolkit, featur</p>
              </div>
    <Carousel responsive={responsive} showDots={true} autoPlay={true}  autoPlaySpeed={2000}>
    <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>
           </div>
       </div>
       <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>
           </div>
       </div>
       <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>

           </div>
       </div> 
       <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>
           </div>
       </div>
       <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>
           </div>
       </div>
       <div className='card'>
           <div>
               <img style={{height : "400px", width:"350px"}} className='product--image' src='./image/me.JPG' alt='enjf'/>

           </div>
       </div> 
 

       
    </Carousel>
  </div>  
  )
}

export default Certificate;