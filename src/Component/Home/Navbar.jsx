import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context-api';
import {Routes, NavLink, Route} from 'react-router-dom';
import Home from './Content';
import About from '../About/AboutTab';
import Project from '../Project/Project';
import Experience from '../Achievement/Experience';
import Blog from '../Blog/Blog';

const Navbar=() =>{
    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    let activeStyle = {
        color: darkMode ? 'rgba(250,240,137,255)' : '#176DE1',
        fontWeight: 600,
    };

    let changeStyle = {
        color: darkMode ? '#DDDEDF' : '#000'
    }

    // function changeNavigateStyle(e){
    //     e.target.style.background = '#718096';
    // }

    // var change = document.getElementById("changeNavigate")
    // change.addEventListener('mouseover', function(){
    //     change.style.background="#718096"
    // })
    // change.addEventListener('mouseleave', function(){
        
    //     change.style.display="#fff"
    // })

    //hover for className in jsx
    // const styles = {
    //     myStyleHoverNav: {
    //         fontWeight: 600,
    //         backgroundColor: '#737373',
    //         borderRadius: '5px',
    //         color : darkMode ? '#fff' : '#000'
    //     }
    // }

    // const [bgColour, setBgColour] = useState("#8a91a1");

    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-light me-auto">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{border : darkMode ? '1px solid rgba(243, 242, 242)' : '1px' }}>
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    
                    <ul className="navbar-nav text-nav">
                        <li className="nav-item ">
                            <a className="nav-link" >
                                <NavLink to="/" style={({isActive}) => isActive ? activeStyle : changeStyle} id="changeNavigate">Home</NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none"> <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : changeStyle}>About</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink to="/project" style={({isActive}) => isActive ? activeStyle : changeStyle}>Projects</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark"> <NavLink to="/experience" style={({isActive}) => isActive ? activeStyle : changeStyle}>Experience</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark"> <NavLink to="/blog" style={({isActive}) => isActive ? activeStyle : changeStyle}>Blog</NavLink></a>
                        </li>
                    </ul>
                </div>
            </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="project" element={<Project/>}/>
            <Route path="experience" element={<Experience/>}/>
            <Route path="blog" element={<Blog/>}/>
        </Routes>
        </div>
    )
}
export default Navbar;