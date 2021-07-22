import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
export class History extends React.Component {
    
    render() {
        const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div/>

      <Parallax pages={5}>
      <ParallaxLayer offset={0} speed={.5} style={{ backgroundColor: '#ff6d6d' }} />
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
    }
}