import React, {useContext} from 'react'
import {BsMoonFill, BsSunFill} from "react-icons/bs";
import { ThemeContext } from '../../context-api';

const Toogle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () =>{
    theme.dispatch({type: "TOGGLE"})
  }

  return (
    <>
    <div className='toggle' onClick={handleClick} style={{backgroundColor: theme.state.darkMode ? 'transparent' : 'white', borderColor : theme.state.darkMode? '#222' : '#b9b7b7'}}>

      {/* {theme.state.darkMode ? <BsMoonFill/> : <BsSunFill/>} */}
      <BsSunFill className='toggle-icon'/>
      <BsMoonFill className='toggle-icon'/>

      <div className="toggle-button"  style={{right: theme.state.darkMode ? 0 : 25}}></div>
    </div>

    <div className='__toggleTab' to="/" onClick={handleClick} style={{backgroundColor: theme.state.darkMode ? 'transparent' : 'transparent', borderColor : theme.state.darkMode ? '#222' : '#b9b7b7'}}>
        {theme.state.darkMode ? <BsMoonFill className="__toggleTab-icon"/> : <BsSunFill className="__toggleTab-icon"/>}
    </div>
    </>
  )
}

export default Toogle