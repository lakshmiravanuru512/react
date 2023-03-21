import {createContext} from "react";

const UserContext=createContext({
    user:{
        name:"Lakshmi",
        email:"lakshmirevanuru512@gmail.com"
    }
});

export default UserContext;