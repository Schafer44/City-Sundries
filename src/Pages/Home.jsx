import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import one from "./Pictures/1.jpeg";
import two from "./Pictures/2.jpeg";
import Logo from './Pictures/Logo.jpeg';
import {Spring,animated} from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Backboard from './Pictures/BackboardSquare.jpg';
import Blackboard from './Pictures/BlackboardSquare.jpg';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0,imgWidth: 0, imgHeight:0 };
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
          console.log('width',this.state.width)
          if(this.state.width === 0){
            return(<><b></b></>);
          }
          else if(this.state.width > 600)
          {
            {console.log('hello')}
        return (
            
             <Spring
             from={{marginTop:-10}}
             to={{marginTop:0}}
             config={{mass:10, friction:100}}
             >
                {props => (
                     <animated.div style={props}>
                         
                         <Parallax pages={5.5} style={{ top: '0', left: '0' }}>
                         
                        <ParallaxLayer offset={0} speed={1} style={{ zIndex:0, background: "linear-gradient(to top, #E1A6B6, #223850)"}} />
                        <ParallaxLayer offset={.8} speed={1} style={{  background: "linear-gradient(to bottom, #E1A6B6, #223850)"}} />
                        <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <SimpleImageSlider style={{maxWidth:'99%',maxHeight:'66%'}}width={this.state.width}height={this.state.height/1}images={IMANGES} showBullets={true} zIndex={1}/>
                        </div>
                        </ParallaxLayer>
                        
                        <ParallaxLayer sticky={{ start: 1.5, end: 2.4 }} speed={.1} style={{ zIndex:0, background: "linear-gradient(to top, #E1A6B6, #223850)"}} />
                        <ParallaxLayer sticky={{ start: 3.4, end: 4 }} speed={1} style={{ zIndex:0, background: "linear-gradient(to bottom, #E1A6B6, #223850)"}} />
                        <ParallaxLayer sticky={{ start: 1.1, end: 1.5 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-start',alignItems: 'center',color: 'white', }}>
                                <div class='textboxLeft'>
                                <img class='TextboxBackboard' src={Backboard} alt=""/>
                                <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                <div class='blackboardText'>Home </div>
                                        <div class='blackboardText'>Stop by City Sundries in beautiful downtown Marquette for fresh-made sandwiches, unique gifts, and homemade ice cream! With original interior from its opening in the early 1900’s, the soda fountain and gift shop is a must see. Featuring original interior including soda fountain, marble tables, wood and glass cases, and tile floor. City Sundries is a unique and friendly space to spend the day. City Sundries can also take care of your special occasions with cards, same day balloon orders, and custom tee shirt designs! Local gift delivery is always free!</div>
                                </div>
                            </ParallaxLayer>
                            
                            <ParallaxLayer sticky={{ start: 1.1, end: 2 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white', }}>
                                <img src={Logo} class='imgRight' alt=""/>
                            </ParallaxLayer>
                            
                            <ParallaxLayer sticky={{ start: 3, end: 3.5 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white', }}>
                                <div class='textboxRight' >
                                <img class='TextboxBackboard' src={Backboard} alt=""/>
                                <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                        <div class='blackboardText'>Hours</div>
                                        <div class='blackboardText'> Tuesday 11-5 Wednesday 11-5 Thursday 11-5 Friday 11-5 Saturday 11-5 Closed Sunday and Monday</div>
                                </div>
                            </ParallaxLayer>
                           
                            <ParallaxLayer sticky={{ start: 2.5, end: 3 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-start',alignItems: 'center',color: 'white', }}>
                                <img src={Logo} class='imgLeft' alt=""/>
                                </ParallaxLayer>

                                <ParallaxLayer sticky={{ start: 4, end: 4.5 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-start',alignItems: 'center',color: 'white', }}>

                                <div class='textboxLeftBottom'>
                                <img class='TextboxBackboard' src={Backboard} alt=""/>
                                <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                        <div class='blackboardText'>Contact us!</div>
                                        <div class='blackboardText'>104 N. Washington Street Marquette, Ks 67464</div>

                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer sticky={{ start: 4.5, end: 4.5 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white', }}>
                                <img src={Logo} class='imgRightBottom' alt=""/>
                            </ParallaxLayer>
                            </Parallax>
                        </animated.div>
                    ) 
                }
            </Spring>
        );
            }
            else
            {
                console.log('please')
                return (
                    <Spring
                    from={{marginTop:-10}}
                    to={{marginTop:0}}
                    config={{mass:10, friction:100}}
                    >
                       {props => (
                            <animated.div style={props}>
                                
                                <Parallax pages={9} style={{ top: '0', left: '0' }}>
                                
                               <ParallaxLayer offset={0} speed={1} style={{ zIndex:0, background: "linear-gradient(to top, #E1A6B6, #223850)"}} />
                               <ParallaxLayer offset={.8} speed={1} style={{  background: "linear-gradient(to bottom, #E1A6B6, #223850)"}} />
                               <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                               <div>
                                   <SimpleImageSlider style={{maxWidth:'99%',maxHeight:'66%'}}width={this.state.width}height={this.state.height/1}images={IMANGES} showBullets={true} zIndex={1}/>
                               </div>
                               </ParallaxLayer>
                               
                               <ParallaxLayer sticky={{ start: 1.5, end: 2.4 }} speed={.1} style={{ zIndex:0, background: "linear-gradient(to top, #E1A6B6, #223850)"}} />
                               <ParallaxLayer sticky={{ start: 3.4, end: 4 }} speed={1} style={{ zIndex:0, background: "linear-gradient(to bottom, #E1A6B6, #223850)"}} />
                               <ParallaxLayer sticky={{ start: 1.1, end: 1.7 }} speed={1}style={{ display: 'flex',justifyContent: 'flex',alignItems: 'center',color: 'white' }}>
                                       <div class='textboxLeft'>
                                       <img class='TextboxBackboard' src={Backboard} alt=""/>
                                        <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                       <div class='blackboardText'>Home</div>
                                               <div class='blackboardText'>Stop by City Sundries in beautiful downtown Marquette for fresh-made sandwiches, unique gifts, and homemade ice cream! With original interior from its opening in the early 1900’s, the soda fountain and gift shop is a must see. Featuring original interior including soda fountain, marble tables, wood and glass cases, and tile floor. City Sundries is a unique and friendly space to spend the day. City Sundries can also take care of your special occasions with cards, same day balloon orders, and custom tee shirt designs! Local gift delivery is always free!</div>
                                       </div>
                                   </ParallaxLayer>
                                   
                                   <ParallaxLayer sticky={{ start: 2.4, end: 3 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white' }}>
                                       <img src={Logo} class='imgRight' alt=""/>
                                   </ParallaxLayer>
                                   
                                   <ParallaxLayer sticky={{ start: 3.7, end: 4.3 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white' }}>
                                       <div class='textboxRight'>
                                       <img class='TextboxBackboard' src={Backboard} alt=""/>
                                <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                               <div class='blackboardText'>Hours</div>
                                               <div class='blackboardText'> Tuesday 11-5 Wednesday 11-5 Thursday 11-5 Friday 11-5 Saturday 11-5 Closed Sunday and Monday</div>
                                       </div>
                                   </ParallaxLayer>
                                  
                                   <ParallaxLayer sticky={{ start: 5, end: 5.6 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-start',alignItems: 'center',color: 'white' }}>
                                       <img src={Logo} class='imgLeft' alt=""/>
                                       </ParallaxLayer>
       
                                       <ParallaxLayer sticky={{ start: 6.3, end: 6.9 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-start',alignItems: 'center',color: 'white', }}>
       
                                       <div class='textboxLeftBottom'>
                                       <img class='TextboxBackboard' src={Backboard} alt=""/>
                                <img class='TextboxBlackboard' src={Blackboard} alt=""/>
                                               <div class='blackboardText'>Contact us!</div>
                                               <div class='blackboardText'>104 N. Washington Street Marquette, Ks 67464</div>
       
                                       </div>
                                   </ParallaxLayer>
                                   <ParallaxLayer sticky={{ start: 7.6, end: 8.2 }} speed={1}style={{ display: 'flex',justifyContent: 'flex-end',alignItems: 'center',color: 'white' }}>
                                       <img src={Logo} class='imgRightBottom' alt=""/>
                                   </ParallaxLayer>
       
       
                                  
                                   </Parallax>
                               </animated.div>
                           ) 
                       }
                   </Spring>
               );
            }
    }
}