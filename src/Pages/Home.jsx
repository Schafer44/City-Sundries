import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import one from "./Pictures/1.jpeg";
import two from "./Pictures/2.jpeg";
import Logo from './Pictures/Logo.jpeg';
import {Spring,animated} from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        const IMANGES = [
            { url: one },
            { url: two },
          ];
        return (
             <Spring
             from={{marginTop:-100}}
             to={{marginTop:0}}
             config={{mass:10, friction:100}}
             >
                {props => (
                     <animated.div style={props}>
                         
                         <Parallax pages={2.45} style={{ top: '0', left: '0' }}>
                         <ParallaxLayer offset={0} speed={.5} style={{ backgroundColor: '#ff6d6d' }} />
                         <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <SimpleImageSlider
                            style={{ maxWidth:'99%',maxHeight:'66%'}}
                            width={this.state.width}
                            height={this.state.height/1}
                            images={IMANGES}
                            showBullets={true}
                            />
                        </div>
                        </ParallaxLayer>
                        
                        
  <ParallaxLayer
    offset={1}
    speed={1}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
                            <div class='mainGrid'>
                                <div class='textboxLeft'>
                                    <div class='grid'>
                                    <p></p>
                                        <div class='ItemHead'>Home</div>
                                        <div class='ItemMain'>Stop by City Sundries in beautiful downtown Marquette for fresh-made sandwiches, unique gifts, and homemade ice cream! With original interior from its opening in the early 1900’s, the soda fountain and gift shop is a must see. Featuring original interior including soda fountain, marble tables, wood and glass cases, and tile floor. City Sundries is a unique and friendly space to spend the day. City Sundries can also take care of your special occasions with cards, same day balloon orders, and custom tee shirt designs! Local gift delivery is always free!</div>
                                    </div>
                                </div>
                                <img src={Logo} class='imgRight' alt=""/>
                                <div class='textboxRight'>
                                    <div class='grid'>
                                        <p></p>
                                        <div class='ItemHead'>Hours</div>
                                        <div class='ItemMain'> Tuesday 11-5 Wednesday 11-5 Thursday 11-5 Friday 11-5 Saturday 11-5 Closed Sunday and Monday</div>
                                    </div>
                                </div>
                                <img src={Logo} class='imgLeft' alt=""/>
                                <div class='textboxLeftBottom'>
                                    <div class='grid'>
                                    <p></p>
                                        <div class='ItemHead'>Contact us!</div>
                                        <div class='ItemMain'>104 N. Washington Street Marquette, Ks 67464</div>
                                    </div>
                                </div>
                                <img src={Logo} class='imgRightBottom' alt=""/>
                            </div>
                            </ParallaxLayer>
                            </Parallax>
                        </animated.div>
                    ) 
                }
            </Spring>
        );
    }
}