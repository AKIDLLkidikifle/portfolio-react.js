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
    <div className='container project' id='portfolio'>
              <div className="px-4 py-1 text-center">
                   <h4 className="display-5  text-body-emphasis mb-4">projects <span style={{ color:"#0477fa"}}>.....</span></h4>
              </div>
              <Carousel responsive={responsive} showDots={true} autoPlay={true}  autoPlaySpeed={2000}>
              <div className='card'>
                  <div>
                      <img  style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/newsletter.PNG' alt='enjf'/>
                      {/* <h5>Newsletter sign up</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>A newsletter is a written publication that provides regular communication to subscribers, typically via email. Newsletters used to tell readers about daily jornal  related to a particular topic.</p>
                      <p >
                         <button className='githubcode'>Code  <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/mailchimp_newsletter-signup"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href='https://kidikifle-newsletter.onrender.com'><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
              </div>
              <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/todo.PNG' alt='enjf'/>
                      {/* <h5>ToDo application</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>ToDo App is a kind of app that used to maintain our day-to-day tasks, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/Todo_list-using-ejs"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href='https://todolist-9fcq.onrender.com'><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/blog.PNG' alt='enjf'/>
                      {/* <h5>Daily Jornal Blog</h5> */}
                      {/* <p className='price'>Newsletter sign up</p> */}
                      <p>is a frequently updated web page used for personal commentary .Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/mailchimp_newsletter-signup"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href='https://kidi-dailyjornal-blog.onrender.com'><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/skin.jpg' alt='enjf'/>
                      {/* <h5>Skin Cancer classification</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>using CNN to analyze skin image and accurately identify type of skincancer affecting skin and after validation and testing the trained dataset deploied into mobile application.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/Skincancer_Detection-using-CNN"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/robot.jpg' alt='enjf'/>
                      {/* <h5>Robot Arm Controlling System</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>Robot arm controlling system typically focuses on the development a mechanism to directly control and manage the movement and action of robot using python, arduiono, c programming languadge.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/RobotArm_controlling-system"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>    
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/me.JPG' alt='enjf'/>
                      {/* <h5>mern stack CRUD application</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>Using MERN stack which is a collection of JavaScript-based technologies. That consists of MongoDB, Express, React, and Node. js. using mongodb store and retrieve data in JSON documents.</p>
                      <p>
                         <button className='githubcode'>Code   <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/MERN-CRUD-operation"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>   
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/weather.PNG' alt='enjf'/>
                      {/* <h5>Weather application</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>The weather application will provide users with real-time weather information, forecasts, and other weather-related data, which can help them make better decisions about their day-to-day activities.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/weather_app-using-ejs"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/joke.PNG' alt='enjf'/>
                      {/* <h5>Random Joke generator</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>A simple web application that generates random Jokes .Built using HTML, CSS, and JavaScript, by using API to fetch jokes from a database and display them in an attractive and user-friendly interface.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/Random_joke"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
             <div className='card'>
                  <div>
                      <img style={{borderRadius: "20px 20px 0 0"}} className='product--image' src='./image/quote.PNG' alt='enjf'/>
                      {/* <h5>Random Quote generator</h5> */}
                      {/* <p className='price'>kmewjf ewfje kwjif wkfijw wkfj</p> */}
                      <p>A simple web application that generates random quotes .Built using HTML, CSS, and JavaScript, by using API to fetch quotes from a database and display them in an attractive and user-friendly interface.</p>
                      <p>
                         <button className='githubcode'>Code <a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle/responsive_quotes-generator"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></button>
                         <button className='livepreview'>Demo  <a href=''><img  style={{height:"20px", width: "20px"}} src='./image/boxarrow.png'  alt='live preview'/></a></button>
                      </p>
                  </div>
             </div>
    </Carousel>
  </div>  
  )
}

export default Portfolio;