import React, {Component, useContext} from 'react'
import { ThemeContext } from '../../context-api'
import ExperienceList from './ExperienceList'
import DocumentMeta from 'react-document-meta'

const Experience = () => {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     takeData: [],
  //   }
  // }
  
  // ambilData(){
  //   fetch('https://api.airtable.com/v0/appBV9h75Y1NHnIiX/Experience?api_key=keyzYjDga7R9pY5tK')
  //   .then((res)=> res.json())
  //   .then(data => {
  //       console.log(data);
  //       this.setState({takeData: data.records});
  //   }).catch(err=>{
  //       console.log(err)
  //   })
  // }

  // componentDidMount(){
  //   this.ambilData();
  // }

  
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const meta = {
      title: 'Experience - Nico Fernando Hondo',
      description: 'Here are some of my certifications when i was in college',
      meta:{
        name:{
          keywords: 'html,tags,portfolio,design,document,meta'
        }
      }
    }
    
    return(
    <DocumentMeta {...meta}>
      <main className="experience-container">
        <section className='experience-stack'>
          <div className="experience-stack wrapper-section">
            <h2 className="experience-heading">
              Experience
            </h2>
            <p className='experience-text mt-3' style={{color : darkMode ? '#a0aec0' : '#4a5568'}}>
                Here are some of the certificates when I was in college
            </p>
          </div>
          <div className='experience-stack'>
            <h4 className="experience-heading pt-4">
              Students Association
            </h4>
            <div className='mt-2'>
              <div className="experience-stack">
                
                  <ExperienceList />
              </div>
            </div>
          </div>
        </section>
      </main>
    </DocumentMeta>
    )
  }
export default Experience