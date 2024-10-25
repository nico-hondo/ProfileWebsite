import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Component/Home/Navbar';
import './Assets/css/style.css'
import Toogle from './Component/Toogle/Toogle';
// Make Example
import { ThemeContext } from './context-api';
import Footer from './Component/Footer/Footer';
import {Routes, Route, useLocation} from 'react-router-dom';
import ResumePage from './Component/ResumePage/ResumePage';


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
        </Routes>
        {showNavAndFooterAndToogle && <Toogle/>}
        {showNavAndFooterAndToogle && <Footer/>}

    </div>
  )
}

export default MainHome