import React from "react";
import { Link} from 'react-router-dom';

export class Footer extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {PageTracker:this.props}
  }

  render() {
    console.log(this.state.PageTracker);
    if(this.state.PageTracker.PageTracker === 'Home')
    {
    return (
        <>
         <nav className = 'Footer-Home'>
            <ul className='Footer-foot'>
                <li>
                    <Link to={'PrivacyPage'}  z-index="2">Privacy page</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
else if(this.state.PageTracker.PageTracker === 'History')
    {
    return (
        <>
         <nav className = 'Footer-History'>
            <ul className='Footer-foot'>
                <li>
                    <Link to={'PrivacyPage'}  z-index="2">Privacy page</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
else if(this.state.PageTracker.PageTracker === 'Menu')
    {
    return (
        <>
         <nav className = 'Footer-Menu'>
            <ul className='Footer-foot'>
                <li>
                    <Link to={'PrivacyPage'}  z-index="2">Privacy page</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
else if(this.state.PageTracker.PageTracker === 'PrivacyPage')
    {
    return (
        <>
         <nav className = 'Footer-PrivacyPage'>
            <ul className='Footer-foot'>
                <li>
                    <Link to={'PrivacyPage'}  z-index="2">Privacy page</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
else{}



}}