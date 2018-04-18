import React from 'react';
import { ParallaxLayer } from 'react-spring';

import page1ImageSrc from '../assets/page_1.jpg';

export default ({ offset, handleClick }) => (
  <ParallaxLayer offset={offset} speed={0}>
    <div className="img-background">
      <img src={page1ImageSrc} alt="Patti Smith" />
    </div>
    <div id="main" className="content">
      <h1 id="title">Patti Smith</h1>
      <div className="text">
        <p id="tribute-info">
          <strong>Patricia Lee Smith</strong> (born December 30, 1946) is an American singer-songwriter, poet, and visual artist who became an influential component of the NYC punk rock movement with her 1975 debut album <strong>Horses</strong>.
        </p>
      </div>
    </div>
    <i
      className="fa fa-angle-right"
      onClick={() => handleClick(offset + 1)}
    />
  </ParallaxLayer>
);