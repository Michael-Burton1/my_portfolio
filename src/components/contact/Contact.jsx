import "./contact.css";
// import { useState } from 'react';
import emailjs from "emailjs-com";



const Contact = () => {
  // const [message, setMessage]= useState(false);
  const handleSubmit =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_qfecpfa', 'template_6bva6nh', e.target, 'user_Ie9bcXHAH6cUttYireDDD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    
    // setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
      <i className="fas fa-handshake "></i>


      </div>
      <div className="right">
        <h2 className="contactTitle">Contact.</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input id="formInputName" type="text" placeholder="Name" name='name' required/>
          <input id="formInputEmail" type="text" placeholder="Email" name='email' required/>
          <textarea id="formTextArea" placeholder="Message" name='message' required></textarea>
          <button id="formButton" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
