import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Component/Navigate/Navbar';
import './Assets/css/style.css'
import Toogle from './Component/Toogle/Toogle';
// Make Example
import { ThemeContext } from './context-api';
import Footer from './Component/Footer/Footer';
import {Routes, Route, useLocation} from 'react-router-dom';
import ResumePage from './Component/ResumePage/ResumePage';
import BottomTab from './Component/Navigate/BottomTab';
import Home from './Component/Home/Content';
import About from './Component/About/AboutTab';
import Project from './Component/Project/Project';
import Experience from './Component/Achievement/Experience';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';


const MainHome = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const location = useLocation();

  const[showNavAndFooterAndToogle, setShowNavAndFooterAndToogle] = useState(
    location.pathname !== '/resume'
  );
  
  useEffect(() => {
    if(location.pathname === '/resume'){
      setShowNavAndFooterAndToogle(false);
    }else{
      setShowNavAndFooterAndToogle(true);
    }
  }, [location.pathname]);

  return (

    <div style={{backgroundColor: darkMode ? '#000' : 'white', color: darkMode && 'white'}}> 

        {showNavAndFooterAndToogle && <Navbar/>}
        <Routes>
          <Route path='/resume' element={<ResumePage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {showNavAndFooterAndToogle && <Toogle/>}
        {showNavAndFooterAndToogle && <Footer/>}
        {showNavAndFooterAndToogle && <BottomTab/>}

    </div>
  )
}

export default MainHome