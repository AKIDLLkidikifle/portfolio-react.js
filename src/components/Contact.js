import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_oddnyiq", "template_lmb0ku1", form.current, {
          publicKey: "3oM0-2obGE8gGU0iJ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("message sent", );
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    };

    return(
	   <div className="contact my-5" id="contact">
		  <div className="contact-box">
			 <div className="left"></div>
			 
			 <form ref={form} onSubmit={sendEmail} className="right">
				     <h2>Contact Us</h2>
				     <input type="text" className="field" placeholder="Your Name" name="user_name" />
				     <input type="text" className="field" placeholder="Your Email" name="user_email" />
				     <input type="text" className="field" placeholder="Phone" name="user_phone" />
				     <textarea placeholder="Message" className="field" name="message"></textarea>
				     <button className="btn">Send</button>
			  </form>
			  
		  </div>
	   </div>			
    )
}

export default Contact;