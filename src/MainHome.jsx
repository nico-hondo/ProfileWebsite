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
import PortfolioLP from './Component/Project/Detail/PortfolioLP';
import PortfolioFD from './Component/Project/Detail/PortfolioFD';


const MainHome = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const location = useLocation();

  //default langsung agar nav dan footer tidak tampil disaat loading data, karna useEffect itu akan dijalankan setelah render pertama, jadi kita set defaultnya false agar tidak terjadi flash pada saat loading data, dan setelah itu baru kita cek di useEffect apakah pathnya sesuai dengan yang kita inginkan atau tidak, jika sesuai maka kita set true agar nav dan footer tampil, jika tidak sesuai maka kita set false agar nav dan footer tidak tampil, jadi dengan cara ini kita bisa menghindari flash pada saat loading data, dan juga kita bisa mengontrol tampilan nav dan footer sesuai dengan path yang kita inginkan.
  const[showNavAndFooterAndToogle, setShowNavAndFooterAndToogle] = useState(
    location.pathname !== '/resume' && location.pathname !== '/project/web-design-for-villa-tolping' && location.pathname !== '/project/mobile-design-freshly-dropped'
  );
  
  useEffect(() => {
    if(location.pathname === '/resume' || location.pathname === '/project/web-design-for-villa-tolping' || location.pathname === '/project/mobile-design-freshly-dropped'){
      setShowNavAndFooterAndToogle(false);
    }else{
      setShowNavAndFooterAndToogle(true);
    }
  }, [location.pathname]);

  return (

    <div className='page-wrapper' style={{backgroundColor: darkMode ? '#000' : 'white', color: darkMode && 'white'}}> 

        {showNavAndFooterAndToogle && <Navbar/>}
        <Routes>
          
          <Route path='/resume' element={<ResumePage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project/web-design-for-villa-tolping" element={<PortfolioLP/>}/>
          <Route path="/project/mobile-design-freshly-dropped" element={<PortfolioFD/>}/>
        </Routes>
        {showNavAndFooterAndToogle && <Toogle/>}
        {showNavAndFooterAndToogle && <Footer/>}
        {showNavAndFooterAndToogle && <BottomTab/>}

    </div>
  )
}

export default MainHome