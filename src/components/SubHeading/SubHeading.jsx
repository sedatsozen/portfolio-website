import React from 'react';

import {images} from "../../constants"
import "./SubHeading.css"

const SubHeading = ({title}) => (
  <div style={{marginBottom: "1rem"}}>
    <div className='subheading__container'>
      <p className='p__cormorant'>{title}</p>
      <img src={images.lineOrnament} alt="spoon" className='line__img'/>
    </div>
  </div>
);

export default SubHeading;
