import React, {useContext} from 'react'
import { ThemeContext } from '../../context-api';
import ProjectList from './ProjectList';
// import DocumentMeta from 'react-document-meta';
import { Helmet } from 'react-helmet-async';

const Project = () => {

  // const meta = {
  //   title: 'Projects - Nico Fernando Hondo',
  //   description: 'Here are some of my past works personal projects',
  //   meta:{
  //     name:{
  //       keywords: 'html,tags,portfolio,design,document,meta'
  //     }
  //   }
  // }

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    // <DocumentMeta {...meta}>
    <>
      <Helmet>
        <title>Projects - Nico Fernando Hondo</title>
        <meta name="description" content="Here are some of my past works personal projects" />
        <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
        <meta name="author" content="Nico Fernando Hondo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="https://nicofernando.my.id/project" /> */}
      </Helmet>
        <main className="project-container">
          <section className='project-stack '>
            <div className="project-wrapper-section">
              <h2 className="project-heading">
                Recent Project
              </h2>
              <p className='project-text' style={{color : darkMode ? '#a0aec0' : '#4a5568'}}>
                Here are some of my past works from personal projects and client website implementations.
              </p>
            </div>
            <div className='projectList-stack'>
              <div className='css-p1'>
                  <ProjectList/>
              </div>
            </div>
          </section>
        </main>
      </>
    // </DocumentMeta>
  )
}

export default Project