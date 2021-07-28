import React from "react";
import Blackboard from './Pictures/fullMenu.jpeg';
import Backboard from './Pictures/Backboard.jpg';
export class Menu extends React.Component {
    render() {
        return (
            <>
                <div class='blackboardDiv'>
                    <img class='backBoard' src={Backboard} alt=""/>
                    <img class='blackBoard' src={Blackboard} alt=""/>
                </div>
            </>
        );
    }
}