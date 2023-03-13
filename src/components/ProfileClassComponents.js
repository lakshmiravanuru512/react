import React  from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Count:0,
            count2:1
        }
    }

    render(){
        return(
            <div>
            <h1>Profile Class Components</h1>
            <h2>name:{this.props.name}</h2>
            <h3>Count:{this.state.Count}</h3>
            <button onClick={()=>{
                this.setState({
                    Count:1,
                    count2:2,
                })
            }}>ClassCount</button>
            </div>
        )
    }
}
export default Profile;