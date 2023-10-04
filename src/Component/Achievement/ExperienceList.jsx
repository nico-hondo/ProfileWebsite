import React, {useEffect, useState, useContext} from 'react'
import { ThemeContext } from '../../context-api'
// import DocumentMeta from 'react-document-meta';

const ExperienceList = () => {

  const [experience, setExperience] = useState([]);
  // const [perbandingan, setPerbandingan] = useState([])

  useEffect(() => {
    fetch('https://api.airtable.com/v0/app6kSlCI6D5XzhMQ/Experience_table?api_key=keyzYjDga7R9pY5tK&sort%5B0%5D%5Bfield%5D=year_field&sort%5B0%5D%5Bdirection%5D=asc')
    .then((res)=> res.json())
    .then((data) => {
        console.log(data);
        setExperience(data.records);
    }).catch(err => {
        console.log(err)
    });
  }, []);

  // useEffect(() => {

  //   if(experience.length !== 0){
  //     for(let i=0; i<experience.length; i++){
  //       var perbandingan = experience[i] + 1;
  //       if(experience[i].year_field == perbandingan){
  //         setPerbandingan(experience.year_field)
  //       }
  //       else{
  //         setPerbandingan(experience.year_field)
  //       }
  //     }
  //   };
  // }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode

    return (
      
      <>
      {experience.length > 0 ? (
        experience.map(record => ( 
          <div key={record.id}>
            {/* Ini buatan Sendiri - menghilangkan Tanggal yang sama */}
              {record.fields.title_field === "Asisten Dosen" ? (
                <div style={{display: 'none'}}>
                  <h5 className="experience-heading" style={{fontWeight: '500', marginBottom: '1rem'}}>
                    {record.fields.year_field}
                  </h5>
                </div>
              ) : (
                <div style={{display: 'block'}}>
                  <h5 className="experience-heading" style={{fontWeight: '500', marginBottom: '1rem'}}>
                    {record.fields.year_field}
                  </h5>
                </div>
              )}
              
            <ul role="list">
              <li className="experience-textList">
                <div className='experience-subTrack'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle experience-svg" viewBox="0 0 16 16" style={{color : darkMode ? 'rgba(250,240,137,255)' : '#36ad81'}}>
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                  <p style={{margin: '0px', fontWeight: '500'}}>{record.fields.title_field}</p>
                </div>
                <p className="experience-text" style={{color : darkMode ? '#a0aec0' : '#4a5568', margin: '0px 0px 10px 23px', fontSize: '13px'}}>{record.fields.desc_field}</p>
                <div className="experience-subTrack" style={{margin: '0px 0px 10px 23px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-plus experience-svg" viewBox="0 0 16 16" style={{color: darkMode ? '#a0aec0' : '#2756a3'}}>
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5V6.5Z"/>
                  </svg>
                  <a href={record.fields.link_field} target="_blank" rel="noopener noreferrer" className='experience-link' style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>https://link.nicofernando.my.id/{record.fields.link_atribut}</a>
                </div>
              </li>
            </ul>
          </div>
          ))
        ) : (
          <p style={{padding: '56px', textAlign: 'center'}}>Fetching data...</p>
        )}
        </>
    )
  }
export default ExperienceList