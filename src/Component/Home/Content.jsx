import React, { useContext } from 'react'
import me from '../../Assets/img/Foto - NicoFernandoHondo.jpg'
import { ThemeContext } from '../../context-api'
import {Routes, NavLink, Route} from 'react-router-dom';
import About from '../About/AboutTab';
import Contact from '../Contact/Contact';
import DocumentMeta from 'react-document-meta'

const Home = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const meta = {
        title: 'Nico Fernando Hondo',
        description: 'Introduction MySelf',
        meta:{
            name:{
                keywords: 'react,meta,document,html,tags'
            }
        }
    }
  return (
    <DocumentMeta {...meta}>
    <main className='container __my-container' justify='space-evenly'>
        <section justify='space-evenly' className='my-section'>
            <div className='my-pict'>
                <div className='my-pict__stack'>
                    <NavLink to='/about' target="_self" aria-label='About' rel="noopener noreferrer">
                        <img alt="The Author" className='my-img' loading='lazy' decoding='async' style={{color: 'transaparent'}} src={me} />
                    </NavLink>
                </div>
            </div>
            <div className='my-desc'>
                <div className='my-desc-profil'>
                    <h1 className='my-name'> Hey, I'm Nico Hondo.</h1>
                    <div className="my-desc-wrapper">
                        A Full-Stack Engineer. Currently based on Medan, ID. 
                        <br/>
                        You’ve found my personal slice of the internet, while you're here you can <NavLink className='__linkme' to='/about' style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>learn more about me</NavLink>.
                    </div>
                </div>
            </div>
            <div className='my-desc-button'>
                <a className='my-resume __my-button-desc' href="https://drive.google.com/file/d/1qPmafRSA1p8RqVPWZhl7QHQe3XNKiGIG/view?usp=drive_link" target="_blank" aria-label='Email' rel="noopener noreferrer" style={{color: darkMode ? '#e2e8f0' : '#000'}}>
                    My Resume
                    <span className='my-button-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down my-svg-button" viewBox="0 0 16 16" >
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                        </svg>
                    </span>
                </a>
                <NavLink className='my-contact __my-button-desc' to="/contact" target="_self" aria-label='Email' rel="noopener noreferrer" style={{color: darkMode ? '#000' : '#e2e8f0', backgroundColor: darkMode ? '#e2e8f0' : '#000'}}>
                    Get in Touch
                </NavLink>
            </div>
        </section>
    </main>
        <Routes>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    </DocumentMeta>
  )
}

export default Home