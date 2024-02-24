import React from "react"
// Class base component

class UserClass extends React.Component{
    constructor(props){
        super(props);   // it calls the constructor to the parent class.
        this.state = {
            userInfo: {
                name:"Dummy",
                location:"heart",
                avatar_url: "http://dummyphoto.com"
            }
        }


    }
    
    async componentDidMount() {
        //console.log("child componentDidMount!")
        /**API call! */

        const data = await fetch("https://api.github.com/users/ThisIsAkriti");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        })
        console.log(json);
    }

    componentWillUnmount(){
        console.log("component will unmount");  // it will load as soon as we unload this page.
    }

    render(){
       // console.log("child-render!")

       const {name , location, avatar_url} = this.state.userInfo;
        return <div className="user-card">
            <img className="my-image" src={ avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akriti005</h4>
    </div>
    }
}

export default UserClass ;