import React from 'react'
import bca from '../../Assets/img/bca.png';
// import bri from '../../Assets/img/bri.png';
import emailjs from '@emailjs/browser';
import { useState, useRef, useContext } from 'react';
import swal from 'sweetalert';
import { ThemeContext } from '../../context-api';
import DocumentMeta from 'react-document-meta';

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

  const meta = {
    title: 'Get in Touch - Nico Fernando Hondo',
    description: 'Contact Me',
    meta:{
        name:{
            keywords: 'react,meta,tags,html,document'
        }
    }
}
  return (
    <DocumentMeta {...meta}>
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <h5 className="contact-title-desc">Are you looking for a discussion partner or someone you can trust to help with your website?</h5>
          {/* <div className="contact-info">
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
          </div> */}
        </div>
        <div className="contact-right">
          <p className="contact-right-desc">
            <b>If so, </b>I am the right person and open for you to contact. There is no limit to contact me. There are several options that you can choose to chat, discuss, or just say hello.
          </p>
          <form ref={formRef} className='formContact' onSubmit={handleSubmit}>
            <label for='subject' className='label-input'>Subject <span>*</span></label>
            <select class="form-control" style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="text" name="user_subject" id='subject'>
              <option>Please select one...</option>
              <option>Project Discussion</option>
              <option>Event Invitation</option>
              <option>Other..</option>
            </select>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label for='name' className='label-input'>Nama <span>*</span></label>
                <input className='contact-input' style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode ? '#fff' : '#000'}} type="text" name="user_name" id='name'/>
              </div>
              <div className='form-group col-md-6'>
                <label for='phone' className='label-input'>Phone (Optional)</label>
                <input className='contact-input' style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="text" name="user_phone" value={"+62"} id='phone'/>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label for='email' className='label-input'>Email <span>*</span></label>
                <input style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="email" name="user_email" id='email'/>
              </div>
              <div className='form-group col-md-6'>
                <label for='organization' className='label-input'>Organization (Optional)</label>
                <input style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="text" name="user_organization" id='organization'/>
              </div>
            </div>
            <div className='form-row form-textarea'>
                <label for='message' className='label-input'>Message <span>*</span></label>
                <textarea style= {{backgroundColor : darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} name="message" id="message" rows="8"></textarea>
            </div>
            <button style={{backgroundColor : darkMode? 'white': '#000', color: darkMode? 'black' : 'white'}}>Submit</button>
            {done&&"Thank You!"}
          </form>
        </div>
      </div>
    </div>
    </DocumentMeta>
  )
}

export default Contact