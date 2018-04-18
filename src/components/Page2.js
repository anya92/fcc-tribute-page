import React from 'react';
import { ParallaxLayer } from 'react-spring';

import page2ImageSrc from '../assets/page_2.jpg';

export default ({ offset, handleClick }) => (
  <ParallaxLayer offset={offset} speed={0}>
    <i
      className="fa fa-angle-left"
      onClick={() => handleClick(offset - 1)}
    />
    <div className="img-background">
      <img src={page2ImageSrc} alt="Patti Smith"/>
    </div>
    <div className="content">
      <h1>punk poet laureate</h1>
      <div className="text">
        <p>Called the "punk poet laureate," Smith fused rock and poetry in her work. Her most widely known song is <strong>"Because the Night"</strong> which was co-written with Bruce Springsteen. It reached number 13 on the Billboard Hot 100 chart in 1978 and number five in the U.K. In 2007, she was inducted into the <strong>Rock and Roll Hall of Fame.</strong></p>
      </div>
    </div>
    <i
      className="fa fa-angle-right"
      onClick={() => handleClick(offset + 1)}
    />
  </ParallaxLayer>
);