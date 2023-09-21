import React, {useContext} from 'react'
import { ThemeContext } from '../../context-api';
import ProjectList from './ProjectList';
import DocumentMeta from 'react-document-meta';

const Project = () => {

  const meta = {
    title: 'Projects - Nico Fernando Hondo',
    description: 'Here are some of my past works personal projects',
    meta:{
      name:{
        keywords: 'html,tags,portfolio,design,document,meta'
      }
    }
  }

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <DocumentMeta {...meta}>
        <main className="project-container">
        <section className='project-stack '>
          <div className="project-wrapper-section">
            <h2 className="project-heading">
              Recent Project
            </h2>
            <p className='project-text' style={{color : darkMode ? '#a0aec0' : '#4a5568'}}>
              Here are some of my past works from personal projects.
            </p>
          </div>
          <div className='projectList-stack'>
            <div className='css-p1'>
                <ProjectList />
            </div>
          </div>
        </section>
      </main>
    </DocumentMeta>
  )
}

export default Project