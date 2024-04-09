function Navbar(){

    function changeMode() {
      var element = document.body;
      element.dataset.bsTheme =
        element.dataset.bsTheme === "dark" ? "light" : "dark";
    }

     
    return(
        <div className="container">
        <nav className="navbar  navbar-expand-md navbar-light pt-3 pb-4">
          <div className="container-xxl">

              <a className="navbar-brand" href="#intro">
                <span style={{fontSize: 25}} className="text-secondary fw-bold">
                  kidi <span style={{color:"#0477fa"}}>:)</span>
                </span>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        
               <div   className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                   <ul className="navbar-nav">
                       <li className="nav-item">
                         <a className="nav-link" href="#home">home</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#about">about</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#portfolio">portfolio</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#skill">skill</a>
                       </li>
                       <li className="nav-item ms-2 d-none d-md-inline">
                         <a className="btn btn-secondary" href="#contact">contact</a>
                       </li>
                   </ul>
               </div>
           </div>
           <div className="form-check form-switch mx-4">
              <input className="form-check-input p-2" type="checkbox"  role="switch" id="flexSwitchCheckChecked" unChecked onClick={changeMode} />
           </div>
        </nav>
     </div>
    )
}

export default Navbar;