import React from "react";
import Logo from './Pictures/Logo.jpeg';
export class SplashScreen extends React.Component {

    render() {
        return(
            <div class="SplashScreenDiv">
        <img src={Logo} className='LogoSplashScreen' alt=""/>
            </div>
        );
    }
    
}