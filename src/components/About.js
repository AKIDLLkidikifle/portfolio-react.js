function About(){
    return(
      <div>
         <section className="about" id="about">
           <div className="container ">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
                <div className="px-4  mt-5 text-center">
                    <img className="d-block mx-auto mb-4" src="./image/me.JPG" alt="" width="150" height="150" />
                    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Download cv</button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
       </section>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0477fa" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,218.7C384,213,480,139,576,101.3C672,64,768,64,864,96C960,128,1056,192,1152,234.7C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  </div>
 )
}

export default About;