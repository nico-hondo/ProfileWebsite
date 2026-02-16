import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context-api';
import {NavLink} from 'react-router-dom';
// import Home from '../Home/Content';
// import About from '../About/AboutTab';
// import Project from '../Project/Project';
// import Experience from '../Achievement/Experience';
// import Blog from '../Blog/Blog';
// import Contact from '../Contact/Contact';
// import ResumePage from '../ResumePage/ResumePage';

const Navbar = () =>{
    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode //contnoh state dark mode

    const[isHover, setIsHovered] = useState(null); //state untuk menyimpan navlink yang sedang dihover oleh pointer mouse

    //event handler untuk hover state
    const handleMouseEnter = (navItemId) => {
        setIsHovered(navItemId);
    };
    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    // --untuk cek apakah navlink adalah navigasi yang aktif lalu sesuaikan darkmode dan apakah nav tersebut diberikan hover dengan pointer mouse atau tidak

    //Ini untuk memberikan nilai berupa color, background setelah hover dan beserta font weight terhadap navigasi yang aktif
    const activeStyle = (navItemId) => ({
        color: darkMode ? 'rgba(250,240,137,255)' : '#176DE1',
        backgroundColor: darkMode ? (isHover === navItemId ? '#1f1f1f' : '') : (isHover === navItemId ? '#E6E9ED' : ''),
        fontWeight: 600,
        backdropFilter: 'blur(12px)'
    });  

    //Ini untuk memberikan nilai berupa color, background setelah hover terhadap navigasi yang tidak aktif, 
    const changeStyle = (navItemId) => ({
        color: darkMode ? '#DDDEDF' : '#000',
        backgroundColor: darkMode ? (isHover === navItemId ? '#1f1f1f' : '') : (isHover === navItemId ? '#E6E9ED' : ''),
    })

    const[isCollapsed, setIsCollapsed] = useState(true);

    const handleNavItemClick = () => {
        setIsCollapsed(true);
    }

    const toggleNavbar = () =>{
        setIsCollapsed(!isCollapsed);
    }

    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-light me-auto fixed-top" style={{backgroundColor : darkMode ? 'rgba(0, 0, 0, 0.64)' : 'rgba(255,255,255,0.64)', backdropFilter: darkMode ? 'blur(10px)' : 'blur(12px)'}}>
                <button className="navbar-toggler" type="button"
                onClick={toggleNavbar}
                data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'} justify-content-center`} id="navbarNavAltMarkup">
                    <ul className="navbar-nav desktop-navbar">
                        <li className="nav-item ">
                            <NavLink to="/" style={({isActive}) => (isActive ? activeStyle('home') : changeStyle('home'))}
                             id="home" className={'nav-link'} 
                            onClick={handleNavItemClick}
                            // onMouse
                            onMouseEnter={() => handleMouseEnter('home')}
                            onMouseLeave={handleMouseLeave}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" style={({isActive}) => (isActive ? activeStyle('about') : changeStyle('about'))}
                             id="about" className={'nav-link'} onClick={handleNavItemClick} onMouseEnter={() => handleMouseEnter('about')}
                            onMouseLeave={handleMouseLeave}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/project" style={({isActive}) => (isActive ? activeStyle('project') : changeStyle('project'))}
                             id="project" className={'nav-link'} onClick={handleNavItemClick} onMouseEnter={() => handleMouseEnter('project')}
                            onMouseLeave={handleMouseLeave}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experience" style={({isActive}) => (isActive ? activeStyle('experience') : changeStyle('experience'))}
                             id="experience"className={'nav-link'} onClick={() => handleNavItemClick('experience')} onMouseEnter={() => handleMouseEnter('experience')}
                            onMouseLeave={handleMouseLeave}>Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" style={({isActive}) => (isActive ? activeStyle('blog') : changeStyle('blog'))}
                             id="blog" className={'nav-link'} onClick={handleNavItemClick} onMouseEnter={() => handleMouseEnter('blog')}
                            onMouseLeave={handleMouseLeave}>Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="project" element={<Project/>}/>
            <Route path="experience" element={<Experience/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="resume" element={<ResumePage/>}/>
        </Routes> */}
        </div>
    )
}
export default Navbar;