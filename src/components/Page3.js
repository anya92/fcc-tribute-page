import React from 'react';
import { ParallaxLayer } from 'react-spring';

import page3ImageSrc from '../assets/page_3.jpg';

export default ({ offset, handleClick }) => (
  <ParallaxLayer offset={offset} speed={0}>
    <i
      className="fa fa-angle-left"
      onClick={() => handleClick(offset - 1)}
    />
    <div className="img-background">
      <img src={page3ImageSrc} alt="Patti Smith"/>
    </div>
    <div className="content">
      <h1>quotes</h1>
      <div className="quotes">
        <blockquote>
          To me, punk rock is the freedom to create, freedom to be successful, freedom to not be successful, freedom to be who you are. It's freedom.
        </blockquote>
        <blockquote>
          People have the power to redeem the work of fools.
          <footer> - <em>People Have the Power (1988)</em></footer>
        </blockquote>
        <blockquote>
          Remember, we are mortal, but poetry is not.
        </blockquote>
        <blockquote>
          There's no better music idol for young women, because there is a lot of pressure for us to be really positive all the time.
          <footer>- <em>Lorde on Patti Smith</em></footer>
        </blockquote>
      </div>
    </div>
    <i
      className="fa fa-angle-right"
      onClick={() => handleClick(offset + 1)}
    />
  </ParallaxLayer>
);