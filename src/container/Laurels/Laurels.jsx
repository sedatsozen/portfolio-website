import React from 'react';

import {images, data} from "../../constants"
import { SubHeading } from '../../components';

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award"/>
    <div className='app__laurels_awards-cards_content'>
      <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg-marble app__wrapper section__padding' id="awards">
    <div className='app__wrapper_info'>
      <SubHeading title="Testimonials" />
      <h1 className='headtext__cormorant'>References</h1>

      <div className='app__skills' style={{paddingTop: "50px"}}>
      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Cenk Göktürk</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>Global Trust Technologies CTO</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>cgokturk@amforaapp.com</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Cenk Göktürk</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>Global Trust Technologies CTO</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>cgokturk@amforaapp.com</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Cenk Göktürk</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>Global Trust Technologies CTO</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>cgokturk@amforaapp.com</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Emine Yeşim Zoral</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>DEU Electrical-Electronics Engineering Head of Department</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>yesim.zoral@gmail.com</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Damla Kuntalp</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>Professor in DEU Electrical-Electronics Engineering</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>damla.kuntalp@gmail.com</p>
      </div>

      <div className='card'>
        <div className="card-icon">
          <img src={images.frameOrnament}/>
          <h2 style={{ color: '#D9BE67', position: "absolute"}}>Emine Çınar Yeni</h2>
        </div>
        <h3 style={{textAlign: "center", textDecoration: "none", borderBottom: "2px solid var(--color-golden)", paddingBottom: "2px"}}>Previous Dean of DEU Engineering Faculty</h3>
        <p className='p__opensans' style={{marginTop: 3, textTransform: "lowercase", textAlign: "center"}}>cinar.yeni@deu.edu.tr</p>
      </div>
      </div>
      
    </div>

    {/* <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels"/>
    </div> */}
  </div>
);

export default Laurels;
