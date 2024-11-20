import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {BsFillHouseDoorFill, BsMoonFill, BsSunFill} from "react-icons/bs";
import {HiOutlineMenuAlt1} from "react-icons/hi";
import { ThemeContext } from "../../context-api";

const BottomTab = () => {

    const theme = useContext(ThemeContext);
    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }
    const darkMode = theme.state.darkMode //contoh state dark mode

    return(
        <div className="css-bottom" style={{backgroundColor: darkMode ? '#000' : '#fff'}}>
            <div className="navbar-nav __mobile-navbar fixed-bottom mb-2">
                <li className='nav-item'>
                    <NavLink className="__toggleMobile" to="/" id='home'>
                        <BsFillHouseDoorFill className="__toggleMobile-icon" style={{color : darkMode ? '#000' : ''}}/>
                        <p className="__mobileIconText">Home</p>
                    </NavLink>
                </li>

                <li className='nav-item'> 
                    <NavLink className='__toggleMobile' to="/" onClick={handleClick} style={{backgroundColor: darkMode ? 'transparent' : 'transparent', borderColor : darkMode? '#222' : '#b9b7b7'}}>
                        {darkMode ? <BsMoonFill className="__toggleMobile-icon" style={{color : darkMode ? '#000' : ''}}/> : <BsSunFill className="__toggleMobile-icon"/>}
                        <p className="__mobileIconText">Mode</p>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <button type="button" className="__toggleMobile" data-toggle="modal" data-target="#myModal">
                        <HiOutlineMenuAlt1 className="__toggleMobile-icon" style={{color : darkMode ? '#000' : ''}}/>
                        <p className="__mobileIconText">Menu</p>
                    </button>
                </li>
            </div>

            {/* Modal */}
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document" style={{backgroundColor: darkMode ? '#2D3748' : '#ffffff'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-stack">
                                <NavLink className="modal-link" to="/about">
                                    About
                                </NavLink>
                                <NavLink className="modal-link" to="/project">
                                    Projects
                                </NavLink>
                                <NavLink className="modal-link" to="/experience">
                                    Experience
                                </NavLink>
                                <NavLink className="modal-link" to="/blog">
                                    Blog
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )

}
export default BottomTab;