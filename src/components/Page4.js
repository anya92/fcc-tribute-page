import React from 'react';
import { ParallaxLayer } from 'react-spring';

import page4ImageSrc from '../assets/page_4.jpg';
import albumCoverSrc from '../assets/album_cover.jpg';

export default ({ offset, handleClick }) => (
  <ParallaxLayer offset={offset} speed={0}>
    <i
      className="fa fa-angle-left"
      onClick={() => handleClick(offset - 1)}
    />
    <div className="img-background">
      <img src={page4ImageSrc} alt="Patti Smith"/>
    </div>
    <div className="content">
      <h1>more...</h1>
      <div className="links">
        <div id="img-div">
          <a 
            id="tribute-link" 
            href="spotify:album:5Azni9In90zMkWAFgWh6RE"
            target="_blank" 
            rel="noopener noreferrer">
            <img src={albumCoverSrc} alt="Cover for Wave" id="image"/>
          </a>
          <div id="img-caption"><em>Wave</em> by Patti Smith Group</div>
        </div>
        <div className="text">
          <p>
            read more on 
            <a  
              className="link"            
              href="https://en.wikipedia.org/wiki/Patti_Smith" 
              target="_blank" 
              rel="noopener noreferrer">
              wikipedia
            </a>
          </p>
          <p>
            listen on 
            <a
              className="link"
              href="spotify:artist:0vYkHhJ48Bs3jWcvZXvOrP"
              target="_blank" 
              rel="noopener noreferrer">
              spotify
            </a>
          </p>
        </div>
      </div>
    </div>
  </ParallaxLayer>
);