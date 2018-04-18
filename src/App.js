import React, { Component } from 'react';
import { Parallax, config } from 'react-spring';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

class App extends Component {
  handleClick = offset => {
    this.parallax.scrollTo(offset);
  }

  render() {
    return (
      <Parallax 
        pages={4}
        scrolling={false}
        horizontal
        config={config.wobbly}
        ref={ref => (this.parallax = ref)}
      >
        <Page1 offset={0} handleClick={this.handleClick} />
        <Page2 offset={1} handleClick={this.handleClick} />
        <Page3 offset={2} handleClick={this.handleClick} />
        <Page4 offset={3} handleClick={this.handleClick} />             
      </Parallax>
    );
  }
}

export default App;