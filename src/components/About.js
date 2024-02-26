import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import myProfile from "./my-pic/myProfile.jpg"
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
        return(
            <div className="flex justify-center">
                <div className="
                flex-row w-6/12 p-10 my-4 shadow-2xl bg-gray-200 rounded-xl">
                    <h1 className=" text-center text-4xl font-bold mt-2 mb-6 font-serif border-2  border-t-gray-200 border-l-gray-200 border-r-gray-200 border-b-white pb-8 ">About</h1>
                
                
                    <div className="flex items-center">
                        <div className="w-28">
                            <img className=" rounded-full object-cover" src= {myProfile} alt="My Image"/>
                        </div>
                    
                        <div className="ml-6">
                            
                            <div className="text-xl ">
                                <UserContext.Consumer>
                                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                                </UserContext.Consumer>
                            </div>
                            <h2 className=" font-semibold text-blue-900">Student</h2>
                            <h2 className=" font-semibold text-blue-900">Excelling in Frontend Development</h2>
                            <h2 className=" font-semibold text-red-700">“Programming isn’t about what you know; it’s about what you can figure out.”</h2>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
};

//written inside return : <UserClass name={"Akriti (class-base-component)"} location = {""} />

export default About; 

/**
 first constructor runs then >> render runs then >> componentDidMount is called at the end<
 */
