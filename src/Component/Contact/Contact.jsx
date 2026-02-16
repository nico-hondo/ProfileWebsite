import React from 'react'
// import bri from '../../Assets/img/bri.png';
import emailjs from '@emailjs/browser';
import { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../context-api';
// import DocumentMeta from 'react-document-meta';
import { AspectRatio } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'; 

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

//   const meta = {
//     title: 'Get in Touch - Nico Fernando Hondo',
//     description: 'Contact Me',
//     meta:{
//         name:{
//             keywords: 'react,meta,tags,html,document'
//         }
//     }
// }
  return (
    // <DocumentMeta {...meta}>
    <>
      <Helmet>
        <title>Get in Touch - Nico Fernando Hondo</title>
        <meta name="description" content="Contact Me" />
        <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
        <meta name="author" content="Nico Fernando Hondo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="https://nicofernando.my.id/contact" /> */}
      </Helmet>
      <main className="container _contact-css">
        <section className="contact-wrapper">
          <blockquote className="contact-left blockquote">
            <h1 className="contact-title">Get in Touch</h1>
            <footer className="contact-title-desc blockquote-footer text-justify">Are you looking for a discussion partner?</footer>
          </blockquote>
          
          <div className="contact-right">
            <p className="contact-right-desc text-justify">
              <b>If so, </b>There are several options that you can choose to chat, discuss, or just say hello.
            </p>
            <form ref={formRef} className='formContact' onSubmit={handleSubmit}>
              <div className='form-row form-subject col-12'>
                <label for='subject' className='label-input'>Subject <span>*</span></label>
                <select className="form-control" style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="text" name="user_subject" id='subject'>
                  <option>Please select one...</option>
                  <option>Project Discussion</option>
                  <option>Event Invitation</option>
                  <option>Other..</option>
                </select>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='name' className='label-input'>Name <span>*</span></label>
                  <input className='contact-input form-control' style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode ? '#fff' : '#000'}} type="text" name="user_name" id='name'/>
                </div>
                <div className='form-group col-md-6 '>
                  <label for='phone' className='label-input'>Phone (Optional)</label>
                  <input className='contact-input' style={{backgroundColor: darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} type="text" name="user_phone" value='+62' id='phone'/>
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
              <div className='form-row form-textarea col-12'>
                  <label for='message' className='label-input'>Message <span>*</span></label>
                  <textarea style= {{backgroundColor : darkMode? '#000' : 'white', borderColor : darkMode? '#222' : '#b9b7b7', color: darkMode? '#fff' : '#000'}} name="message" id="message" rows="8"></textarea>
              </div>
              <button style={{backgroundColor : darkMode? 'white': '#000', color: darkMode? 'black' : 'white'}}>Submit</button>
              {done&&"Thank You!"}
            </form>
          </div>
          
          <div className='contact-map'>
          <h4 className='contact-title-map'>My Location</h4>
          <p className='contact-desc-map text-justify'>I am a Fullstack Engineer who lives in the district of Medan, North Sumatera, ID.</p>
          <AspectRatio ratio={21/9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31856.552116801526!2d98.70227383911656!3d3.571599769759326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303130e64ec4e8c1%3A0x6b823c30d7a388ab!2sKec.%20Medan%20Denai%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1721426365960!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" scrolling="no" referrerpolicy="no-referrer-when-downgrade" title='Iframe Map'/>
          </AspectRatio>
        </div>
        </section>
      </main>
    </>
    // </DocumentMeta>
  )
}

export default Contact