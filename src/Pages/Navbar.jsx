import { Button } from "antd";
import React from "react";
import { Link} from 'react-router-dom';
import Logo from './Pictures/Logo.jpeg';
import HistoryButton from './Pictures/History.jpeg';
import HomeButton from './Pictures/Home.jpeg';
import MenuButton from './Pictures/Menu.jpeg';
import {Spring,animated} from 'react-spring';

export default function Navbar() {
        return (
            <Spring
             from={{opacity:1,marginLeft:-8000}}
             to={{opacity:1,marginLeft:0}}
             config={{mass:10, friction:100}}
             >
                {props => (
                     <animated.div style={props}>
                <nav className = 'Navbar'>
                    <ul class='navbar-nav'>
                    <img class= "navLogo" z-index="2" src={Logo}/>
                    <div class="NavbarButtons">
                        <Link to={''} className="link" ><img src={HomeButton}/> </Link>
                    </div>
                    <div class="NavbarButtons">
                        <Link to={'menu'}className="link"><img src={MenuButton}/></Link> 
                    </div>
                    <div class="NavbarButtons" >
                        <Link to={'history'}className="link"><img src={HistoryButton}/></Link>
                    </div>
                    </ul>
                </nav>
                </animated.div>
                    )
                    } 
                    </Spring>
        );
    } 