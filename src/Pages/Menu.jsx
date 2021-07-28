import React from "react";
import Blackboard from './Pictures/fullMenu.jpeg';
export class Menu extends React.Component {
    render() {
        return (
            <>
                <div class='blackboardDiv'>
                    <img class='black' src={Blackboard} alt=""/>
                </div>
            </>
        );
    }
}