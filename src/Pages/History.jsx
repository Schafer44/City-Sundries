import React from "react";
import HistoryV2 from './Pictures/HistoryV2.jpeg';
import Backboard from './Pictures/BackboardSquare.jpg';
import Blackboard from './Pictures/BlackboardSquare.jpg';
import {Footer} from "./Footer";

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0,imgWidth: 0, imgHeight:0};
    
}
    render() {
      return (
    <div>
       <div class="WhiteScreen"></div>
      <img className="HistoryImage"src={HistoryV2} alt=""/>
      <div class="sectionTwo"></div>
      <div class="sectionThree"></div>
      <section></section>
      <div class="HistoryCont">
      <img className='TextboxBackboardHistory' src={Backboard} alt=""/>
      <img className='TextboxBlackboardHistory' src={Blackboard} alt=""/>
        <div class="HistoryTextbox">
        <div class="HistoryText">City Sundries is a historic soda fountain and gift shop with many unique features. The tile floors, marble countertops, and wooden cases are more than 120 years old.</div>
        <br></br>
        <div class="HistoryText">Since its opening in 1901, City Sundries has been serving ice cream and merchandise in beautiful downtown Marquette. When it opened, the shop also functioned as a drugstore where people could enjoy an milkshake while filling prescriptions. This became a popular feature around the 1920’s when prohibition left bars closed and locals looking for a place to socialize. Although many drugstores closed by 1970, City Sundries has remained a historical landmark of Kansas. </div>
        <br></br>
        <div class="HistoryText">The 1888 building still displays some original drugstore features. The shelves are lined with antique medication bottles, original photos and antique malt machines. As one of only 39 remaining soda fountains in Kansas, City Sundries is truly unique. It has been featured in The 8 Wonders of Kansas Customs and is a popular tourist destination. </div>
        <br></br>
        <div class="HistoryText">Spend the day in historic Marquette to visit City Sundries and all of our Main Street attractions! Marquette features a range schoolhouse museum, railroad museum, the Kansas Motorcycle Museum. You can also stop into the Smoky Valley Distillery, swim at the town pool, or play a round of disc golf in our 18 hole course. Come see all that we have to offer!</div>
        </div>
        <div class="filler"></div>
        <Footer PageTracker={'History'}/>
      </div>
    </div>
      );
    }
}