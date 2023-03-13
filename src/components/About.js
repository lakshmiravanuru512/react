import { Outlet } from "react-router-dom";
import Profile  from "./Profile";
import ProfileClass from "./ProfileClassComponents";


const About=()=>{
    return (
        <div>
        <h1>This is AboutUs Page</h1>
        <p>This is a React class chapter-07 Finding Path</p>
         <ProfileClass  name={"Ravi"}/>
        <Profile  name={"Lakshmi"}/>
        </div>
    )
}

export default About