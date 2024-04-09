function Newsletter(){
    return(
     <div className="px-4 py-5 my-5 text-center newsletter">
        <div className="col-lg-6 mx-auto">
           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button  type="button" className="btn  btn-lg px-4 gap-3"><a href="https://kidikifle-newsletter.onrender.com">Subscribe to my newsletter</a><img  style={{height:"40px", width: "40px", marginLeft:"20px"}} src="./image/newsletter.svg" alt="" /></button>
           </div>
        </div>
     </div>
    )
}

export default Newsletter;