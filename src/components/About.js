import User from "./user";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("parent Constructor!")
    }

    componentDidMount() {
        //console.log("parent componentDidMount!")
    }
    render() {
        console.log("parent render");
        return(
            <div>
                <h1>About</h1>
                <h2>This is about component</h2>
                <UserClass name={"Akriti (class-base-component)"} location = { "Tehri Garhwal!"} />
            </div>
        );
    }
};
export default About; 

/**
 first constructor runs then >> render runs then >> componentDidMount is called at the end<
 */
