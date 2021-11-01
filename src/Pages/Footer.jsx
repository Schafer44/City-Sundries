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
                    
                <a href="https://www.facebook.com/citysundries/" className='facebook'>
                <svg class="" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/></svg>
                </a>
                </li>
                <li>
                    <Link to={'PrivacyPage'}  className='privacyLink'>Privacy Policy</Link>
                </li>
                <li>
                    <div className='Copyright'>Copyright © 2021 All rights reserved</div>
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
                    
                    <a href="https://www.facebook.com/citysundries/" className='facebook'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/></svg>
                    </a>
                    </li>
                    <li>
                        <Link to={'PrivacyPage'}  className='privacyLink'>Privacy Policy</Link>
                    </li>
                    <li>
                        <div className='Copyright'>Copyright © 2021 All rights reserved</div>
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
                    
                    <a href="https://www.facebook.com/citysundries/" className='facebook'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/></svg>
                    </a>
                    </li>
                    <li>
                        <Link to={'PrivacyPage'}  className='privacyLink'>Privacy Policy</Link>
                    </li>
                    <li>
                        <div className='Copyright'>Copyright © 2021 All rights reserved</div>
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
                    
                    <a href="https://www.facebook.com/citysundries/" className='facebook'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/></svg>
                    </a>
                    </li>
                    <li>
                        <Link to={'PrivacyPage'}  className='privacyLink'>Privacy Policy</Link>
                    </li>
                    <li>
                        <div className='Copyright'>Copyright © 2021 All rights reserved</div>
                    </li>
            </ul>
        </nav>
        </>
    );
}
else{}



}}