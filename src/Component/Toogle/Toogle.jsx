import React, {useContext} from 'react'
import Moon from '../../Assets/img/moon.png';
import Sun from '../../Assets/img/sun.png';
import { ThemeContext } from '../../context-api';

const Toogle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () =>{
    theme.dispatch({type: "TOGGLE"})
  }

  return (
    <div className='toggle' onClick={handleClick} style={{backgroundColor: theme.state.darkMode ? 'transparent' : 'white', borderColor : theme.state.darkMode? '#222' : '#b9b7b7'}}>
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div className="toggle-button"  style={{right: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toogle