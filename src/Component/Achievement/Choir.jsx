import React, {useContext, useEffect, useState} from 'react'

export default class Choir extends React.Component{

  render(){
    return (
      <>
        {/* {projectList.length > 0 ? (
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
          } */}
      </>
    )
  }
}