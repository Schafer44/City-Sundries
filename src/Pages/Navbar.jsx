
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
                <nav class = 'Navbar'>
                    <ul class='navbar-nav'>
                    <img class= "navLogo" z-index="2" src={Logo}/>
                    <Link to={''} class="link" ><img src={HomeButton}/> </Link>
                    <Link to={'menu'}class="link"><img src={MenuButton}/></Link> 
                    <Link to={'history'}class="link"><img src={HistoryButton}/></Link>
                    </ul>
                </nav>
                </animated.div>
                    )
                    } 
                    </Spring>
        );
    } 