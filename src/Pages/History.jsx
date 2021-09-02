import React from "react";
import HistoryV2 from './Pictures/HistoryV2.jpeg';

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0,imgWidth: 0, imgHeight:0,svgWidth:0};
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
    if((20000/-this.state.width>-20))
    {
      this.setState({svgWidth:100000/-this.state.width});
    }
    else if((20000/-this.state.width>-45)){
      this.setState({svgWidth:20000/-this.state.width});
    }
    else{
      this.setState({svgWidth:10000/-this.state.width});
    }
}
    render() {
      console.log(20000/-this.state.width);
      
      return (
    <div>
      <div className="spacer layer1"style={{right:this.state.svgWidth}}>
      </div>
      <img className="HistoryImage"src={HistoryV2} alt=""/>
      <section></section>
      <div className="HistoryCont">
        <div className="HistoryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
    </div>
      );
    }
}