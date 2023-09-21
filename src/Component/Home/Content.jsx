import React, { useContext } from 'react'
import me from '../../Assets/img/Foto - NicoFernandoHondo.jpg'
import { ThemeContext } from '../../context-api'
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
    <div className='my mb-3'>
        <main className='container __my-container' justify='space-evenly'>
            <section justify='space-evenly' className='my-section'>
                <div className='my-pict'>
                    <div className='my-pict__stack'>
                        <a href='/about' target="_self" aria-label='About' rel="noopener noreferrer">
                            <img alt="Picture of the Author" className='my-img' loading='lazy' decoding='async' style={{color: 'transaparent'}} src={me} />
                        </a>
                    </div>
                </div>
                <div className='my-desc'>
                    <div className='my-desc-profil'>
                        <h1 className='my-name'> Hey, I'm Nico Hondo.</h1>
                        <div className="my-desc-wrapper">
                            Web developer enthusiast. Currently based on Medan, ID. 
                            <br/>
                            You’ve found my personal slice of the internet, while you're here you can <a className='__linkme' href='/about' style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>learn more about me</a>.
                        </div>
                    </div>
                </div>
                <div className='my-desc-button'>
                    <a className='my-resume __my-button-desc' href="https://drive.google.com/file/d/1QCycBj4RzM0K42fHmB1HbWPBt3QOKA_W/view?usp=sharing" target="_blank" aria-label='Email' rel="noopener noreferrer" style={{color: darkMode ? '#e2e8f0' : '#000'}}>
                        My Resume
                        <span className='my-button-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down my-svg-button" viewBox="0 0 16 16" >
                            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                            </svg>
                        </span>
                    </a>
                    <a className='my-contact __my-button-desc' href="/contact" target="_self" aria-label='Email' rel="noopener noreferrer" style={{color: darkMode ? '#000' : '#e2e8f0', backgroundColor: darkMode ? '#e2e8f0' : '#000'}}>
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
        {/* <div className="hr-pembatas" style={{ borderTop : darkMode ?  "3px solid #fff" : "3px solid #000"}}></div> */}
    </div>
    </DocumentMeta>
  )
}

export default Home