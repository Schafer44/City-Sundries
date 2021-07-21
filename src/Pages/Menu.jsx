import React from "react";
import Blackboard from './Pictures/Blackboard.jpg';
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