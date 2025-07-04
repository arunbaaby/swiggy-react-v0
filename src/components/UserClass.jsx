import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: '',
                location: '',
                login: ''
            }
        }
    }


    async componentDidMount() {
        try {
            const data = await fetch('https://api.github.com/users/arunbaaby');
            const jsonData = await data.json();
            this.setState({
                userInfo: jsonData
            });
        } catch (error) {
            console.log('unable to fetch userInfo: ', error);
        }
    }

    componentDidUpdate(){
        console.log('component did update');
    }

    // when we go to another page the data will be unmounted
    componentWillUnmount(){
        console.log('component will unmount');
    }

    render() {
        const { name, location, login } = this.state.userInfo;
        return (
            <div className="user-wrapper p-8 shadow-2xl rounded-2xl">
                <h2 className="font-bold text-2xl">Class Component</h2>
                {/* <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count++</button>
            <h3>Count: {this.state.count} </h3> */}
                <h3>Name: {login} </h3>
                <h4>Location : {location}</h4>
                <h4>contact: </h4>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default UserClass;