import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"

import './Chef.css';

import {IoMdMusicalNotes} from "react-icons/io"
import { GiBoxingGlove, GiPencilBrush, GiCookingPot } from 'react-icons/gi';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='aboutme'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.photo} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="About Me"/>
      <h1 className='headtext__cormorant' style={{fontSize: "50px", textAlign: "center"}}>Combination of art and software</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <p className='p__opensans' style={{textAlign: "justify"}}>In every project I work on, striving for perfection is my top priority and I believe that the best products come to life when technology meets aesthetic</p>
        </div>

        <div className='subcontainer'>
          <div className='languages-container'>
            <h3>Languages</h3>
            <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
              <div className='turkish-image'/>
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Turkish (C1)</h2>
            </div>

            <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
              <div className='english-image'/>
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>English (C1)</h2>
            </div>

            <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
              <div className='german-image'/>
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>German (C1)</h2>
            </div>

            <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
              <div className='spanish-image'/>
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Spanish (B2)</h2>
            </div>
          </div>

          <div className='hobbies-container'>
            <h3 style={{paddingLeft: "65px"}}>Hobbies</h3>

            <div className='icon__wrapper-about'>
              <IoMdMusicalNotes style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="50px" />
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Electric-Bass-Flamenco Guitar</h2>
            </div>

            <div className='icon__wrapper-about'>
              <GiBoxingGlove style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="50px" />
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Muay Thai</h2>
            </div>

            <div className='icon__wrapper-about'>
              <GiPencilBrush style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="50px" />
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Tattoo Design</h2>
            </div>

            <div className='icon__wrapper-about'>
              <GiCookingPot style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="50px" />
              <h2 style={{color: "white", marginLeft: "10px", fontSize: "20px"}}>Cooking</h2>
            </div>
          </div>
        </div>

        <div className='app__chef-sign'>
          <img src={images.signature} alt="sign"/>
        </div>

      </div>
    </div>
  </div>
);

export default Chef;
