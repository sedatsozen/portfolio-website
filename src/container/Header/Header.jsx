import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"

import './Header.css';

import {MdComputer, MdDesignServices} from "react-icons/md"
import { GiMeshNetwork } from 'react-icons/gi';
import {BsPhoneFill} from "react-icons/bs";
import {FaNetworkWired} from "react-icons/fa"
import {TbWaveSine} from "react-icons/tb"

const galleryImages = [images.programmingStock1, images.programmingStock2, images.programmingStock3, images.programmingStock4, images.programmingStock5, images.programmingStock6]

const Header = () => (
  <div>
    <div className='app__bg-marble app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Development With Elegance"/>
      <h1 className='app__header-h1'>Sedat Sözen</h1>
      <h3 className='header__desc' style={{margin: "2rem 0"}}>Software Developer / Data Scientist / UI-UX Designer </h3>
    </div>
  </div>

    <div className='app__skills app__bg-marble'>
      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <MdComputer style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>Native Software Development</h3>
        <p className='p__opensans' style={{marginTop: 3}}>Development of native apps with Java and C#</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <GiMeshNetwork style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>Data Science</h3>
        <p className='p__opensans' style={{marginTop: 3}}>Data Preprocessing, Filtering, Visualization, ML Model Training, Theoretical Data Science</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <BsPhoneFill style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>Mobile App Development</h3>
        <p className='p__opensans' style={{marginTop: 3}}>Development with Android Studio and React Native</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <FaNetworkWired style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>Full Stack Web Design</h3>
        <p className='p__opensans' style={{marginTop: 3}}>Frontend design with React.js and Angular.js, Backend with SQL Database and Node.js</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <MdDesignServices style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>UI / UX Design</h3>
        <p className='p__opensans' style={{marginTop: 3}}>UI / UX Design for Mobile and Native Apps with Canva, Figma and CSS Technologies</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <TbWaveSine style={{ color: '#D9BE67', position: "absolute"}} size="90px" />
        </div>
        <h3>Computational Signal Processing</h3>
        <p className='p__opensans' style={{marginTop: 3}}>Digital Filter Implementation and Scientific Computing with Python and MATLAB</p>
      </div>
  </div>
</div>
);

export default Header;
