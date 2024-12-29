import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Clock from '../clock'; 

const Navbar = ({ setCurrentSection }) => {
  
  return (
    <nav className="navbar">
      <div className="logo">    
        <a href="#home">My Portfolio</a>
      </div>
     
      <div className='navtime'>  <Clock /> 
       </div>
      <div className="Social-media">
        <div class="icons">
          <a href="https://in.linkedin.com/in/abhishek-bijalwan-6125432a2" class="linkedin">
            <div class="layer">
              <span></span><span></span><span></span><span class="linkedin"></span>
            </div>
          </a>

          <a href="https://instagram.com/in/abhishekbijalwan58" class="instagram">
            <div class="layer">
              <span></span><span></span><span></span><span class="fab fa-instagram"></span>
            </div>
          </a>
          <a href="https://github.com/Abhii58/" class="Github">
            <div class="layer">
              <span></span><span></span><span></span><span class="Github"></span>
            </div>
          </a>
        </div>


      </div>

   
     {/*   MUlti pages 
      
     <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/About">About</Link></li>
  <li><Link to="/Projects">Projects</Link></li>
  <li><Link to="/Skills">Skills</Link></li>
  <li><Link to="/Contact">Contact</Link></li>
</ul> */}
<ul className="nav-links">
        <li><a href="#home" onClick={() => setCurrentSection('Home')}>Home</a></li>
        <li><a href="#about" onClick={() => setCurrentSection('About')}>About</a></li>
        <li><a href="#projects" onClick={() => setCurrentSection('Projects')}>Projects</a></li>
        <li><a href="#skills" onClick={() => setCurrentSection('Skills')}>Skills</a></li>
        <li><a href="#contact" onClick={() => setCurrentSection('Contact')}>Contact</a></li>
      </ul>

      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
