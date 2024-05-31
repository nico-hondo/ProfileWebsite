import React, { useContext } from 'react'
// import img from '../../Assets/img/About-1.jpg';
// import img1 from '../../Assets/img/welcome.jpg';
import { ThemeContext } from '../../context-api';

const About = () => {
    
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='about pt-5'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                {/* <img src={img} alt="" className="a-img" /> */}
            </div>
        </div>
        <div className="about-right">
            <div className="about-right-direction">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                Hi there! My name is Nico Fernando Hondo, and Nico in short.
                </p>
                <p className="about-desc" style={{color: darkMode ? '#8a91a1' : 'black'}}>
                    A hard worker, strong-willed and fast learner. Born and raised in Medan, ID and now still living in Medan absolutely, ID. Graduated from STMIK Mikroskil Medan at 2021 as System Information student.
                    <div>Therefore, I have a strong interest in software development, especially in web and mobile applications by always following current technology trends. But for now, I spend more time exploring frontend development mostly on Node.js and React as codebases.
                    </div>
                </p>
                <div className='about-award'>
                    {/* <img src={img1} alt="" className="about-award-img" /> */}
                    <div className="about-award-text">
                        <h4 className="about-award-title">Member Of Web Programming UNPAS</h4>
                        <div className="about-award-desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure modi consequatur similique. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About