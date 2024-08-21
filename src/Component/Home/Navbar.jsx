import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context-api';
import {Routes, NavLink, Route} from 'react-router-dom';
import Home from './Content';
import About from '../About/AboutTab';
import Project from '../Project/Project';
import Experience from '../Achievement/Experience';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { styled } from '@chakra-ui/react';
import { color } from 'framer-motion';

const Navbar = () =>{
    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const[isHover, setIsHovered] = useState(true); //state untuk hover

    //event handler untuk hover state
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    let activeStyle = {
        color: darkMode ? 'rgba(250,240,137,255)' : '#176DE1',
        fontWeight: 600,
    };  

    let changeStyle = {
        color: darkMode ? '#DDDEDF' : '#000'
    }

    const cekActiveStyle = {
        color: darkMode ? (({isActive}) => isActive ? activeStyle : changeStyle)
    }

    const[isCollapsed, setIsCollapsed] = useState(true);

    const handleNavItemClick = () => {
        setIsCollapsed(true);
    }

    const toggleNavbar = () =>{
        setIsCollapsed(!isCollapsed);
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
            <nav className="navbar navbar-expand-lg navbar-light me-auto" style={{backgroundColor : darkMode ? 'rgba(0, 0, 0, 0.64)' : 'rgba(255,255,255,0.64)', backdropFilter: darkMode ? 'blur(10px)' : 'blur(12px)'}}>
                <button className="navbar-toggler" type="button"
                onClick={toggleNavbar}
                data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'} justify-content-center`} id="navbarNavAltMarkup">
                    <ul className="navbar-nav text-nav">
                        <li className="nav-item ">
                            <NavLink to="/" style={({isActive}) => isActive ? activeStyle : changeStyle} id="changeNavigate" className={'nav-link'} onClick={handleNavItemClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : changeStyle} className={'nav-link'} onClick={handleNavItemClick}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/project" style={({isActive}) => isActive ? activeStyle : changeStyle} className={'nav-link'} onClick={handleNavItemClick}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experience" style={({isActive}) => isActive ? activeStyle : changeStyle} className={'nav-link'} onClick={handleNavItemClick}>Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" style={({isActive}) => isActive ? activeStyle : changeStyle} className={'nav-link'} onClick={handleNavItemClick}>Blog</NavLink>
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
            <Route path="contact" element={<Contact/>}/>
        </Routes>
        </div>
    )
}
export default Navbar;