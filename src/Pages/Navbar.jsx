
import React from "react";
import { Link} from 'react-router-dom';
import Logo from './Pictures/LogoPhone.jpeg';
import HistoryButton from './Pictures/History.jpeg';
import HomeButton from './Pictures/Home.jpeg';
import MenuButton from './Pictures/Menu.jpeg';
import {Spring,animated} from 'react-spring';

export default function Navbar() {
        return (
            <Spring
             from={{opacity:1,marginLeft:-80}}
             to={{opacity:1,marginLeft:0}}
             config={{mass:10, friction:100}}
             >
                {props => (
                     <animated.div style={props}>
                <nav className = 'Navbar'>
                    <ul className='navbar-nav'>
                        <li>
                            <img className= "navbarImg" z-index="2" src={Logo}alt=""/>
                        </li>
                        <li>
                            <Link to={''} className="link" ><img className='navbarImg'src={HomeButton}alt="HomeButton"/> </Link>
                        </li>
                        <li>
                            <Link to={'menu'}className="link"><img className='navbarImg' src={MenuButton}alt="MenuButton"/></Link> 
                        </li>
                        <li>
                            <Link to={'history'}className="link"><img className='navbarImg 'src={HistoryButton}alt="HistoryButton"/></Link>
                        </li>
                    </ul>
                </nav>
                </animated.div>
                    )
                    } 
                    </Spring>
        );
    } 