import React, {useEffect, useState, useContext}from 'react';
import ProjectPhp from '../../Assets/img/welcome.jpg';

const ProjectList = () =>{

    return(
        <>
            <div className="project-linkBox">
                <div className='__project-aspect-ratio'>
                    <img alt="Preview of the project" typeof='webp' decoding='async' loading='lazy' data-nimg="fill" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={ProjectPhp} style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent'}}/>
                </div>
                <div className='project-detail-stack'>
                    <h2 className='project-detail-heading'>WISO Portal Akademik</h2>
                    <p className='project-detail-text'>Is an academic portal to create integration between Students - Universities - and Lecturers within the scope of a system called WISO (WInd Single User account)</p>
                    <div className='project-wrap'>
                        <ul className='project-wrap__list'>
                            <li className='project-wrap__listitem'>
                                <span className='css-p2'>Php</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-linkBox">
                <div className='__project-aspect-ratio'>
                    <img alt="Preview of the project" typeof='webp' decoding='async' loading='lazy' data-nimg="fill" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={ProjectPhp} style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent'}}/>
                </div>
            </div>
            <div className="project-linkBox">
                <div className='__project-aspect-ratio'>
                    <img alt="Preview of the project" typeof='webp' decoding='async' loading='lazy' data-nimg="fill" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={ProjectPhp} style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent'}}/>
                </div>
            </div>
            <div className="project-linkBox">
                <div className='__project-aspect-ratio'>
                    <img alt="Preview of the project" typeof='webp' decoding='async' loading='lazy' data-nimg="fill" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={ProjectPhp} style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent'}}/>
                </div>
            </div>
        </>
    )
}
export default ProjectList