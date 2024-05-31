import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import ProjectPhp from '../../Assets/img/welcome.jpg';

// "https://api.airtable.com/v0/app6kSlCI6D5XzhMQ/Project_table?maxRecords=3&view=Grid%20view" \
//   -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

function ProjectList (){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const personalAccessToken = 'patjHUK5tYKCywfl7.0a233416cd6770ef39893b5ea61b72ab400a4cc541832a32d025d2374afe8ae2';
            const baseId = 'app6kSlCI6D5XzhMQ';
            const tableNamebyId = 'tblN3ums5BMjZqAeT';
            const url = `https://api.airtable.com/v0/${baseId}/${tableNamebyId}/`;

            try{
                const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${personalAccessToken}`
                }
                });

                setData(response.data.records);
                setLoading(false);

                console.log(response.data);

            }catch(error){
                console.error('Error fetching data from Database: ', error);
                setLoading(false);
            }
        }
        fetchData();
  }, []);

  if(loading){
    return <div>Loading...</div>
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
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}
export default ProjectList