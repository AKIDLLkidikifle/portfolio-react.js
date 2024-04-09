import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter"

function Hero(){
    const [textmk] = useTypewriter({
       words : ["web developer", "ui/ ux designer", "mern stack developer"],
       loop : {},
       typeSpeed: 200,
       delaySpeed: 40
    });

    return(
        <div>
            <div className="container" id="home">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6 ">
                       <img src="./image/me.JPG" className="d-block mx-lg-auto img-fluid blob" alt="hero" width="600" height="400" loading="lazy" />
                  </div>
                  <div className="col-lg-6">
                       <h1 className="display-5 fw-bold lh-1 mb-3">👋 I am  
                          <span style={{color:"#0477fa"}}>
                              {" " +textmk}
                          </span>
                          <Cursor />
                          
                       </h1>
                       <p className="lead">Hi, i'm kidist kifle. A patienated FullStack web developer</p>
                       <p >in ethiopia</p>
                       <p className="socialmedia-icon">
                            <a className="text-body-secondary" href="https://linkedin.com/in/kidist-kifle1047" /><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg==" />
                            <a className="text-body-secondary mx-2 " href="https://github.com/AKIDLLkidikifle" /><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC" />
                       </p>
                       <div>
              
                       <span >Tech stack    |          </span><img src="./image/htmlicon.webp" style={{height: "30px", width:"30px"}}/>
                           <img  className="mx-4" src="./image/cssicon.png" style={{height: "30px", width:"30px"}}/>
                           <img src="./image/jsicon.webp" style={{height: "37px", width:"37px"}}/>
                           <img className="mx-4" src="./image/react.svg" style={{height: "30px", width:"30px"}}/>
                           <img src="./image/jquery.svg" style={{height: "35px", width:"35px"}}/>
                           <img className="mx-4" src="./image/nodejs.svg" style={{height: "40px", width:"40px"}}/>
                           <img src="./image/bootstrap.svg" style={{height: "35px", width:"35px"}}/>
                       </div>
                       
                  </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#0477fa" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,138.7C672,139,768,181,864,170.7C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero;