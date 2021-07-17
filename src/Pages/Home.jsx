import React from "react";
import { Layout,Button } from "antd";
import SimpleImageSlider from "react-simple-image-slider";
import one from "./Pictures/1.jpeg";
import two from "./Pictures/2.jpeg";
import Logo from './Pictures/Logo.jpeg';
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
            <>
                <div>
                    <SimpleImageSlider
                    style={{ maxWidth:'99%',maxHeight:'66%'}}
                    width={this.state.width}
                    height={this.state.height/1.5}
                    images={IMANGES}
                    showBullets={true}
                    />
                </div>

                    <div class='mainGrid'>
                        <div class='textboxLeft'>
                            <div class='grid'>
                            <p></p>
                                <div class='ItemHead'>Home</div>
                                <div class='ItemMain'>Stop by City Sundries in beautiful downtown Marquette for fresh-made sandwiches, unique gifts, and homemade ice cream! With original interior from its opening in the early 1900’s, the soda fountain and gift shop is a must see. Featuring original interior including soda fountain, marble tables, wood and glass cases, and tile floor. City Sundries is a unique and friendly space to spend the day. City Sundries can also take care of your special occasions with cards, same day balloon orders, and custom tee shirt designs! Local gift delivery is always free!</div>
                            </div>
                        </div>
                        <img src={Logo} class='imgRight'/>
                        <div class='textboxRight'>
                            <div class='grid'>
                                <p></p>
                                <div class='ItemHead'>Hours</div>
                                <div class='ItemMain'> Tuesday 11-5 Wednesday 11-5 Thursday 11-5 Friday 11-5 Saturday 11-5 Closed Sunday and Monday</div>
                            </div>
                        </div>
                        <img src={Logo} class='imgLeft'/>
                        <div class='textboxLeftBottom'>
                            <div class='grid'>
                            <p></p>
                                <div class='ItemHead'>Contact us!</div>
                                <div class='ItemMain'>104 N. Washington Street Marquette, Ks 67464</div>
                            </div>
                        </div>
                        <img src={Logo} class='imgRightBottom' />
                    </div>
            </>
        );
    }
}