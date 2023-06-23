import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

import SubHeading from "../SubHeading/SubHeading"

import './Newsletter.css';

import {IoMdMail} from "react-icons/io"
import {AiFillLinkedin} from "react-icons/ai"

const Newsletter = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vqsnp3x', 'template_eli8g7j', form.current, 'Ui1UOdI2Sd8SMTo75')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const downloadResume = () => {
    fetch("Sedat_Sozen_CV_English.pdf").then(response => {
      response.blob().then(blob => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = "Sedat_Sozen_CV_English.pdf";
        alink.click();
      })
    })
  }

return(
  <div className='app__newsletter' id='contact'>
    <SubHeading title="Contact" />
    <h1 className='headtext__cormorant contact-text'>Get in Contact With Me</h1>
    <p className='p__opensans'>And Find My Resume Below</p>
    <div className='contact-info'>
      <IoMdMail style={{ color: '#D9BE67'}} size="30px"/>
      <p className='p__opensans' style={{ textTransform: "lowercase"}}>sedatsozen1@gmail.com</p>
      <AiFillLinkedin style={{ color: '#D9BE67', marginLeft: "1rem"}} size="30px"/>
      <p className='p__opensans' style={{ textTransform: "lowercase"}}>https://www.linkedin.com/in/sedat-sözen-900967124/</p>
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <div className='app__newsletter-input'>
        <input type="email" placeholder='Enter your email address' name="user_email"/>
        <input style={{marginTop: "1rem"}} type="text" placeholder='Topic' name="user_topic"/>
        <textarea style={{marginTop: "1rem"}} type="Topic" placeholder='Content' rows="4" cols="50" name="message"/>
      </div>

      
        <input type='submit' value="Send Email" className='custom__button'/>
        <button className='custom__button' onClick={downloadResume}>Download Resume</button>
      
      
    </form>
    
  </div>
);
}

export default Newsletter;
