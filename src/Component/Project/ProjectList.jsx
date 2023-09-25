import React, {useEffect, useState, useContext} from 'react';
import ProjectPhp from '../../Assets/img/welcome.jpg';

// "https://api.airtable.com/v0/app6kSlCI6D5XzhMQ/Project_table?maxRecords=3&view=Grid%20view" \
//   -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

const ProjectList = () =>{

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
    fetch('https://api.airtable.com/v0/app6kSlCI6D5XzhMQ/Project_table?api_key=keyzYjDga7R9pY5tK&sort%5B0%5D%5Bfield%5D=year_create&sort%5B0%5D%5Bdirection%5D=asc')
    .then((res)=> res.json())
    .then((data) => {
        console.log(data);
        setProjectList(data.records);
    }).catch(err => {
        console.log(err)
    });
  }, []);

    return(
        <>
            {projectList.length > 0 ? (
                projectList.map(record => (
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
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <p style={{padding: '56px', textAlign: 'center'}}>Fetching data...</p>
                )
            }
        </>
    )
}
export default ProjectList