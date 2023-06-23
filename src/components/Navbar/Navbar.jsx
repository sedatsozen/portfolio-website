import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

import images from "../../constants/images"

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? 'app__navbar app__navbar-bg' : 'app__navbar'}>
    <div className='app__navbar-logo'>
      <img src={images.ss} alt="app logo"/>
    </div>

    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>Technologies</a></li>
      <li className='p__opensans'><a href='#menu'>Experience</a></li>
      <li className='p__opensans'><a href='#aboutme'>About Me</a></li>
      <li className='p__opensans'><a href='#awards'>References</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontsize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>Technologies</a></li>
            <li className='p__opensans'><a href='#menu'>Experience</a></li>
            <li className='p__opensans'><a href='#aboutme'>About Me</a></li>
            <li className='p__opensans'><a href='#awards'>References</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      )
      }
    </div>
  </nav>
  )
  
};

export default Navbar;
