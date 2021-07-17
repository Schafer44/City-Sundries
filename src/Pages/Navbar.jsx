import { Button } from "antd";
import React from "react";
import { Link} from 'react-router-dom';
import Logo from './Pictures/Logo.jpeg';
import HistoryButton from './Pictures/History.jpeg';
import HomeButton from './Pictures/Home.jpeg';
import MenuButton from './Pictures/Menu.jpeg';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 ,isMobile:false};
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
        return (
            <>
                <nav className = 'Navbar'>
                    <ul class='navbar-nav'>
                    <img z-index="2" src={Logo}/>
                    <Button className="NavbarButtons" type="primary" shape="round">
                        <Link to={''} className="link" ><img src={HomeButton}/> </Link>
                    </Button>
                    <Button className="NavbarButtons" type="primary" shape="round">
                        <Link to={'menu'}className="link"><img src={MenuButton}/></Link> 
                    </Button>
                    <Button className="NavbarButtons" type="primary" shape="round">
                        <Link to={'history'}className="link"><img src={HistoryButton}/></Link>
                    </Button>
                    </ul>
                </nav>
            </>
        );
    }
}