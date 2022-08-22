import React, { useContext } from 'react'
import Navbar from './Component/Home/Navbar';
import Content from './Component/Home/Content';
import './Assets/css/style.css'
import About from './Component/About/About';
import ProductList from './Component/Product/ProductList';
import Contact from './Component/Contact/Contact'
import Toogle from './Component/Toogle/Toogle';
// Make Example
import { ThemeContext } from './context-api';
import Footer from './Component/Footer/Footer';


const MainHome = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? '#000' : 'white', color: darkMode && 'white'}}> 
        <Navbar/>
        <Toogle/>
        <Footer/>
    </div>
  )
}

export default MainHome