function Hero(){
    return(
        <div>
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6 ">
                       <img src="./image/me.JPG" className="d-block mx-lg-auto img-fluid blob" alt="hero" width="700" height="500" loading="lazy" />
                  </div>
                  <div className="col-lg-6">
                       <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                       <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                       <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                       </div>
                  </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#0477fa" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,138.7C672,139,768,181,864,170.7C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero;