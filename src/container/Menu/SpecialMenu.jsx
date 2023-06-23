import React from 'react';

import {images, data} from "../../constants"
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding app__bg-marble' id="menu">
    <div className='app__specialMenu-title'>
      <h1 className='headtext__cormorant'>Work Experience</h1>
    </div>

    <div className='app__workexperience'>
      <div className='app__workexperience-element'>
        <div className='element-image-bosch logo-circle' />

        <div className='element-desc'>
          <h2>Robert Bosch GmbH - Software Developer / Technical Sales</h2>
          <h3>March 2023 - Continuing</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Development of a Car Renting System for the factories located in Bursa / Turkey including Frontend, Backend and Database Integrations. (Angular.js, Visual C#)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Various contributions and consultations to the Bosch Software Development Team regarding bug fixing, Frontend design and sample data generation for multiple web applications (Angular.js, Visual C#)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Documentation of various products developed by the Software Development Team and designing the apperance of these documents in order to make them look professional and attractive. Making the presentations for these products and making them look elegant and professional.</li>
          </ul>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-contractor'>
          <h1 style={{color: "var(--color-golden)", padding: "17px"}}>IC</h1>
        </div>

        <div className='element-desc'>
          <h2>Independent Contractor - Data Scientist / Mobile Developer</h2>
          <h3>October 2022 - Continuing</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Member of a team to maintain the infrastructure of their website and their platform to handle the lawsuits (Wordpress, Python, Django)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Social Media (Twitter) Analysis Program with NLP and Sentiment Analysis (Python, Flask)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Contribution to a stock market algorithm that gathers data, filters and creates a model from the data. Various contributions to other algorithms. (Python)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Development of multiple mobile apps and websites. (React, React Native)</li>
          </ul>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-aselsan logo-circle' />

        <div className='element-desc'>
          <h2>Aselsan Corporation - UI / UX Design, ASP.NET C# Intern</h2>
          <h3>July 2022 - August 2022</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Design and modernization of the UI for the naval defence system "Kırlangıç" and integration of that UI to Web. (HTML-CSS-JS, ASP.NET)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Creation of the communication protocols between Kırlangıç and the UI using TCP and UDP. (Visual C#, ASP.NET)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Fix and troubleshooting of various errors in the embedded interface of Kırlangıç.</li>
          </ul>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-nursan logo-circle' />

        <div className='element-desc'>
          <h2>Nursan Cable Assemblies - Android Developer Intern</h2>
          <h3>July 2021 - August 2021</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Development of an Android App which controls the workflow of the R&D team which is connected to the website and database of the company. (Java, HTML-CSS-Javascript)</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Development of a system for Android Studio that allows users to develop Android applications using vanilla HTML-CSS-JS and non-framefork JS libraries. (Java, JS)</li>
          </ul>
        </div>
      </div>
    </div>

    <div className='app__specialMenu-title' style={{marginTop: "50px"}}>
      <h1 className='headtext__cormorant'>Personal Projects</h1>
    </div>

    <div className='app__workexperience'>
      <div className='app__workexperience-element'>
        <div className='element-image-contractor'>
          <h1 style={{color: "var(--color-golden)", padding: "17px", marginLeft: "-7px"}}>MT</h1>
        </div>

        <div className='element-desc'>
          <h2>Automatic Music Transcription Program (Python)</h2>
          <h3>Final Year Project</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Creating a program that takes any mp3 formatted file and separates instruments, isolates tracks, and using scientific computing techniques such as the short-term Fourier transform, creates the spectrograms of each isolated track.</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Using image processing techniques, the program detects every millisecond which frequencies are being played and then uses custom mapping functions to output which note is being played at what time with the volume in dB.</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>To increase accuracy, the program uses signal processing techniques such as filters, equalization, denoising with wavelet transform and singular value decomposition resulting in a 75% accuracy.</li>
          </ul>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-contractor'>
          <h1 style={{color: "var(--color-golden)", padding: "17px"}}>SL</h1>
        </div>

        <div className='element-desc'>
          <h2>Software Leader, DEUROV Underwater Vehicle Team (Java, Python)</h2>
          <h3>Involvement in the team of the university</h3>

          <ul style={{textAlign: 'justify', marginLeft: "20px", marginTop: "10px"}}>
            <li className='p__opensans'>Development of a visual interface that collects visual and sensory data from the vehicle and allows users to control this vehicle with a gamepad controller and worked to reduce latency from 1.5 seconds to 10 milliseconds.</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Creaation of the circuitry responsible for communication, sensors, and coordination of multiple microcontrollers within the vehicle.</li>
            <li className='p__opensans' style={{marginTop: "10px"}}>Development of the software responsible for the two-way communication using Python, which also coordinates microcontrollers in the vehicle itself and the controlling the computer using TCP and IP communication protocols.</li>
          </ul>
        </div>
      </div>

      <div className='app__specialMenu-title' style={{marginTop: "50px"}}>
      <h1 className='headtext__cormorant'>Education</h1>
    </div>

      <div>
      <div className='app__workexperience-element'>
        <div className='element-image-DEU logo-circle' />

        <div className='element-desc'>
          <h2>Dokuz Eylül University Electrical - Electronics Engineering</h2>
          <h3>100% English, GPA: 3.04 (September 2019 - July 2023)</h3>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-HS logo-circle'>
          
        </div>

        <div className='element-desc'>
          <h2>Hochschule Koblenz Elektrotechnik</h2>
          <h3>100% German, Erasmus Exchange Student (October 2021 - March 2022) </h3>
        </div>
      </div>

      <div className='app__workexperience-element' style={{paddingTop: "20px"}}>
        <div className='element-image-DEU logo-circle' />

        <div className='element-desc'>
          <h2>Dokuz Eylül University Mechanical Engineering</h2>
          <h3>30% English, GPA: 3.12 (September 2018 - July 2019)</h3>
        </div>
      </div>
    </div>
    </div>

    

  </div>
);

export default SpecialMenu;
