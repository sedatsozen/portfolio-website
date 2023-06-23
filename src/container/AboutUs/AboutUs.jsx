import React from 'react';

import {images} from "../../constants"

import './AboutUs.css';

import {DiJava, DiVisualstudio, DiPython, DiJavascript, DiCss3Full, DiReact, DiAngularSimple, DiAndroid, DiDatabase} from "react-icons/di"
import {SiMicrosoftazure, SiCanva, SiFigma} from "react-icons/si"

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Technologies</h1>
        <div className='icons'>
          <div className='icon__wrapper'>
            <DiJava style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Java</h3>
          </div>

          <div className='icon__wrapper'>
            <DiVisualstudio style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>C# ASP.NET</h3>
          </div>

          <div className='icon__wrapper'>
            <DiPython style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Python</h3>
          </div>

          <div className='icon__wrapper'>
            <DiJavascript style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>JS / TS</h3>
          </div>

          <div className='icon__wrapper'>
            <DiCss3Full style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>CSS / SCSS</h3>
          </div>

          <div className='icon__wrapper'>
            <DiReact style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>React / Native</h3>
          </div>

          <div className='icon__wrapper'>
            <DiAngularSimple style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Angular</h3>
          </div>

          <div className='icon__wrapper'>
            <DiAndroid style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Android Studio</h3>
          </div>

          <div className='icon__wrapper'>
            <SiMicrosoftazure style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Azure</h3>
          </div>

          <div className='icon__wrapper'>
            <SiCanva style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Canva</h3>
          </div>

          <div className='icon__wrapper'>
            <SiFigma style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>Figma</h3>
          </div>

          <div className='icon__wrapper'>
            <DiDatabase style={{ color: '#D9BE67', border: "3px solid #D9BE67", borderRadius: "50%", padding: "5px", backgroundColor: "#7F1F32" }} size="90px" />
            <h3>SQL</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
