import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        console.log("message sent");
      },
      (error) => {
        console.log("FAILED...", error.text);
      },
    );
};

<form ref={form} onSubmit={sendEmail}>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>PHONE</label>
<input type="text" name="user_phone" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form>   