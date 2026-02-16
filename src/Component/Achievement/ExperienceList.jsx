import React, {useEffect, useState, useContext} from 'react'
import { ThemeContext } from '../../context-api'
import axios from 'axios';
// import DocumentMeta from 'react-document-meta';

const ExperienceList = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('/api/experience');
        setData(response.data);
      }catch(error){
        console.error(error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  if(loading){
    return  <div className='loadData' style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>
              <span className='letter'>L</span>
              <span className='letter'>o</span>
              <span className='letter'>a</span>
              <span className='letter'>d</span>
              <span className='letter'>i</span>
              <span className='letter'>n</span>
              <span className='letter'>g</span>
              <span className='letter'>.</span>
              <span className='letter'>.</span>
              <span className='letter'>.</span>
            </div>
  }

    return (
      
      <>
      {data.map(record => ( 
          <div key={record.id}>
            {/* Ini buatan Sendiri - menghilangkan Tanggal yang sama */}
              {record.fields.title_field === "Asisten Dosen" || record.fields.title_field === "Choir Participant as Tenor Voice - PND XXVIII" || record.fields.title_field === "Winson Cold Storage" ? (
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
              
            <ul>
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
                  <a href={record.fields.link_field} target="_blank" rel="noopener noreferrer" className='experience-link' style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3'}}>
                    Read more
                  </a>
                </div>
              </li>
            </ul>
            {record.fields.title_field === "Panitia Seminar" || record.fields.title_field === "In House Training: Golang Programming Language" || record.fields.title_field === "Choir Participant as Tenor Voice - PND XXVIII"? (
                <div style={{display: 'none'}}>
                  <hr aria-orientation='horizontal' className='__hr-css'/>
                </div>
              ) : (
                <div style={{display: 'block'}}>
                  <hr aria-orientation='horizontal' className='__hr-css'/>
                </div>
              )}
            
          </div>
          ))
        }
      </>
    )
}
export default ExperienceList