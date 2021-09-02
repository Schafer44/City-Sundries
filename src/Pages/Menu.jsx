import React from "react";
import Blackboard from './Pictures/NewMenu.jpeg';
import Menu1 from './Pictures/MenuPart1.jpeg';
import Menu2 from './Pictures/MenuPart2.jpeg';
import Menu3 from './Pictures/MenuPart3.jpeg';
import Backboard from './Pictures/Backboard.jpg';
export class Menu extends React.Component {
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
        if(this.state.width === 0){
            return(<><b></b></>);
          }
          else if(this.state.width > 600)
          {
        return (
            <>
                <div className='blackboardDiv' >
                    <img className='backBoard' src={Backboard} alt=""/>
                    <img className='blackBoard' src={Blackboard} alt=""/>
                </div>
            </>
        );
    }
    else{
        return (
            <>
            <div style={{ backgroundImage: `url(${Backboard})`}}>
                <div className='blackboardDiv' >
                    <img className='blackBoardPhoneOne' src={Menu1} alt=""/>
                </div>
                <div className='blackboardDiv' >
                    <img className='blackBoardPhoneTwo' src={Menu2} alt=""/>
                </div>
                <div className='blackboardDiv' >
                    <img className='blackBoardPhoneThree' src={Menu3} alt=""/>
                </div>
                <br></br>
            </div>
            </>
        );
    }
}
}