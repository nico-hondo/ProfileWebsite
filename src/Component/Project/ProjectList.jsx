import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../context-api';
import { HiBookOpen } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
// import ProjectPhp from '../../Assets/img/welcome.jpg';

function ProjectList (){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get('/api/project');
                setData(response.data);
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  if(loading){
    return <div className="loadData" style={{color: darkMode ? 'rgba(250,240,137,255)' : '#2756a3', fontSize: '18px', fontWeight: 'semibold', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1,}}>
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
    return(
        <>
            {data.map(record => (
                <div key={record.id}>
                    <div className="project-linkBox">
                        <div className='__project-aspect-ratio'>
                            <img alt="Preview of the project" typeof='webp' decoding='async' loading='lazy' data-nimg="fill" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={record.fields.link_pict} style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent'}}/>
                        </div>
                        <div className='project-detail-stack'>
                            <h2 className='project-detail-heading'>{record.fields.title_project}</h2>
                            <p className='project-detail-text'>{record.fields.desc_project}</p>
                            <div className='project-wrap'>
                                <ul className='project-wrap__list'>
                                    <li className='project-wrap__listitem'>
                                        <span className='css-p2'>{record.fields.list_stack}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='project-link'>
                                <NavLink to={`/project/${record.fields.link_route}`} target="_blank" rel="noopener noreferrer" className='project-link__item' style={record.fields.link_route != null ? {display: 'flex'} : {display: 'none'}}>
                                    <HiBookOpen className='project-link__icon'/>
                                    <span className='project-link__text'>View Study Case</span>
                                </NavLink>
                                <a href={record.fields.link_external} target="_blank" rel="noopener noreferrer" className='project-link__item' style={record.fields.link_external != null ? {display: 'flex'} : {display: 'none'}}>
                                    <IoIosLink className='project-link__icon'/>
                                    <span className='project-link__text'>{record.fields.deskripsi === "website" ? 'Visit Website' : 'Visit'}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))
            }
        </>
        
    )
}
export default ProjectList