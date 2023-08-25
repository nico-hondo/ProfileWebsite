import React, { useContext } from 'react'
import me from '../../Assets/img/foto_profil.png'
import { ThemeContext } from '../../context-api'
import DocumentMeta from 'react-document-meta'

const Content = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const meta = {
        title: 'Home - Nico Fernando Hondo',
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
        <div className='my-left'>
            <div className='my-left-profil'>
                <h2 className='my-intro'>Hey, I'm</h2>
                <h1 className='my-name'>Nico Fernando Hondo</h1>
                <div className='my-title'>
                    <div className="my-title-wrapper">
                        <div className="my-title-item" style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>Front-End Engineer</div>
                        <div className="my-title-item" style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>UI/UX Designer</div>
                        <div className="my-title-item" style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>Photographer</div>
                        <div className="my-title-item" style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>Quality Assurance</div>
                    </div>
                </div>
                <div className="my-desc-wrapper">
                    Web and mobile developer enthusiast. Currently based on Medan, ID. You’ve found my personal slice of the internet, while you're here you can learn more about me.
                </div>
            </div>
        </div>
        <div className='my-right'>
            <div className="my-bg" style={{backgroundColor: darkMode ? '#E6DB6A' : '#2756a3'}}></div>
            <img src={me} alt="" className='my-img'/>
        </div>
        <div className="hr-pembatas" style={{ borderTop : darkMode ?  "3px solid #fff" : "3px solid #000"}}></div>
    </div>
    </DocumentMeta>
  )
}

export default Content