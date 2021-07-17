import React from "react";
import { Layout,Button } from "antd";
import Blackboard from './Pictures/Blackboard.jpg';
import Logo from './Pictures/Logo.jpeg';
export class Menu extends React.Component {
    render() {
        return (
            <>
                <div class='blackboardDiv'>
                    <img class='black' src={Blackboard} />
                </div>
            </>
        );
    }
}