import React, {useContext} from 'react'
import { ThemeContext } from '../../context-api'
import ExperienceList from './ExperienceList'
// import DocumentMeta from 'react-document-meta'
import { Helmet } from 'react-helmet-async'; 

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

    // const meta = {
    //   title: 'Experience - Nico Fernando Hondo',
    //   description: 'Here are some of my certifications when i was in college',
    //   meta:{
    //     name:{
    //       keywords: 'html,tags,portfolio,design,document,meta'
    //     }
    //   }
    // }
    
return(
    // <DocumentMeta {...meta}>
    <>
      <Helmet>
        <title>Experience - Nico Fernando Hondo</title>
        <meta name="description" content="Here are some of my certification when i was in college" />
        <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
        <meta name="author" content="Nico Fernando Hondo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="https://nicofernando.my.id/experience" /> */}
      </Helmet>
      <main className="experience-container">
        <section className='experience-stack'>
          <div className="experience-stack wrapper-section">
            <h2 className="experience-heading">
              Experience
            </h2>
            <p className='experience-text mt-3' style={{color : darkMode ? '#a0aec0' : '#4a5568'}}>
              Here are some of the milestones in my journey.
            </p>
          </div>
          <div className='experience-stack pt-4'>
            {/* <h4 className="experience-heading pt-4">
              Students Association
            </h4> */}
            <div className='mt-2'>
              <div className="experience-stack">
                  <ExperienceList />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
    // </DocumentMeta>
  )
}
export default Experience