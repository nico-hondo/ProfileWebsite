import React from 'react'
import bca from '../../Assets/img/bca.png';
// import bri from '../../Assets/img/bri.png';
import emailjs from '@emailjs/browser';
import { useState, useRef, useContext } from 'react';
import swal from 'sweetalert';
import { ThemeContext } from '../../context-api';

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs
    .sendForm(
      'service_mgjgioj', 
      'template_cswqtqf', 
      formRef.current, 
      'CcRKrOkBPITCRtA7V'
      )
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left mt-5">
          <h1 className="contact-title">Get in Touch</h1>
          <h4 className="contact-title-desc">Are you looking for a discussion partner or someone you can trust to help with your website?</h4>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={bca} alt="" className="contact-icon" />
              +62 82283812400
            </div>
            <div className="contact-info-item">
              <img src={bca} alt="" className="contact-icon" />nicohondo@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={bca} alt="" className="contact-icon" />Jalan Sempurna Ujung
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-right-desc">
            <b>If so, </b>I am the right person and open for you to contact. There is no limit to contact me. There are several options that you can choose to chat, discuss, or just say hello.
          </p>
          <form ref={formRef} className='formContact' onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7'}} type="text" name="user_subject" placeholder='Subject'/>
            <input style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7'}} type="text" name="user_name" placeholder='Nama'/>
            <input style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7'}} type="email" name="user_email" placeholder='Email'/>
            <textarea style= {{backgroundColor : darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7'}}name="message" id="message" rows="8"></textarea>
            <button style={{backgroundColor : darkMode? 'white': '#000', color: darkMode? 'black' : 'white'}}>Submit</button>
            {done&&"Thank You!"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact